import Slideshow from '../components/Slideshow/Slideshow'
import logements from '../logements.json'
import { useParams } from 'react-router-dom'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  const photos = logement ? logement.pictures : []
  return <Slideshow photos={photos} />
}
export default Logement
