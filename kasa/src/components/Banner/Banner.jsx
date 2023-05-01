import styles from './Banner.module.css'

// Banniere page Home
function Banner(props) {
  return (
    <div className={styles.banner}>
      <img className={styles.bannerImg} src={props.image} alt="" />
      <p className={styles.bannerText}>Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner
