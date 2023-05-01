import styles from './Host.module.css'

// Affichage du nom et photo de l'hote
function Host(props) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{props.name}</p>
      <img className={styles.hostPicture} src={props.hostImage} alt="hôte" />
    </div>
  )
}
export default Host
