import Slideshow from '../components/Slideshow/Slideshow'
import Tag from '../components/Tag/Tag'
import Collapse from '../components/Collapse/Collapse'
import Host from '../components/Host/Host'
import logements from '../logements.json'
import { useParams } from 'react-router-dom'
import Ratings from '../components/Ratings/Ratings'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  return (
    <div>
      <Slideshow photos={logement.pictures} />
      <h1>{logement.title}</h1>
      <p className="location">{logement.location}</p>
      <Tag text={logement.tags} />
      <Ratings />
      <Host name={logement.host.name} hostImage={logement.host.picture} />
      <Collapse title="Description" text={logement.description} />
      <Collapse
        title="Équipements"
        text={logement.equipments.map((equipment) => (
          <div key={equipment}>
            {equipment}
            <br />
          </div>
        ))}
      />
    </div>
  )
}
export default Logement
