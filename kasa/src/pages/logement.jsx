import Slideshow from '../components/Slideshow/Slideshow'
import Tag from '../components/Tag/Tag'
import Collapse from '../components/Collapse/Collapse'
import Host from '../components/Host/Host'
import logements from '../logements.json'
import Ratings from '../components/Ratings/Ratings'
import styles from '../utils/styles/Logement.module.css'

import { useParams, Navigate } from 'react-router-dom'

function Logement() {
  const { id } = useParams()
  // recherche du logement correspondant à l'id
  const logement = logements.find((logement) => logement.id === id)

  // Hook navigate pour la redirection en cas de modif id
  if (!logement) {
    return <Navigate to="/notfound" />
  }
  return (
    <div>
      <Slideshow photos={logement.pictures} />
      <div className={styles.flexDesktop}>
        <h1>{logement.title}</h1>
        <p className={styles.location}>{logement.location}</p>
        <Tag text={logement.tags} />
        <div className={styles.hostRatings}>
          <Ratings note={logement.rating} />
          <Host name={logement.host.name} hostImage={logement.host.picture} />
        </div>
      </div>
      <div className={styles.collapseDesktop}>
        <Collapse title="Description" text={logement.description} className={styles.collapseDesktop} />
        <div className={styles.void}></div>
        <Collapse
          title="Équipements"
          text={
            <ul className={styles.list}>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}
export default Logement
