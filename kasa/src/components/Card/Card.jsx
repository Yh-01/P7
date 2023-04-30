import styles from './Card.module.css'
import logements from '../../logements.json'
import { Link } from 'react-router-dom'

function Card() {
  const cardList = logements.map((logement) => (
    <Link to={`/logement/${logement.id}`}>
      <div className={styles.card} key={logement.id}>
        <img className={styles.cardImage} src={logement.cover} alt={logement.title} />
        <p className={styles.cardText}>{logement.title}</p>
      </div>
    </Link>
  ))
  return <div className={styles.cardContainer}>{cardList}</div>
}
export default Card
