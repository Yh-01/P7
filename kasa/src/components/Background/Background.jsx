import styles from './Background.module.css'

function Background(props) {
  return <img src={props.image} alt="mountain" className={styles.picture} />
}
export default Background
