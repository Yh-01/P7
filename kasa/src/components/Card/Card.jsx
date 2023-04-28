import styles from './Card.module.css'
import logements from '../../logements.json'

function Card() {
  const cardList = logements.map((logement) => (
    <div className={styles.card}>
      <img className={styles.cardImage} src={logement.cover} alt={logement.title} />
    </div>
  ))
  return <div className={styles.cardContainer}>{cardList}</div>
}
export default Card
