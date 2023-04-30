import styles from './Host.module.css'

function Host(props) {
  return (
    <div>
      <p className={styles.name}>{props.name}</p>
      <img className={styles.hostPicture} src={props.hostImage} alt="hôte" />
    </div>
  )
}
export default Host
