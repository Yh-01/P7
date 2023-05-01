import styles from './Ratings.module.css'
import greyStar from '../../assets/greyStar.png'
import orangeStar from '../../assets/orangeStar.png'

function Ratings(props) {
  const rating = props.note
  const stars = []

  // Ajouter les étoiles oranges
  for (let i = 0; i < rating; i++) {
    stars.push(<img className={styles.star} key={i} src={orangeStar} alt="orange star" />)
  }

  // Ajouter les étoiles grises
  for (let i = rating; i < 5; i++) {
    stars.push(<img className={styles.star} key={i} src={greyStar} alt="grey star" />)
  }

  return <div className={styles.container}>{stars}</div>
}

export default Ratings
