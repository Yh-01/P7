import styles from './Banner.module.css'
import image from '../../assets/beach.png'

function Banner() {
  return (
    <div className={styles.banner}>
      <img className={styles.bannerImg} src={image} alt="" />
      <p className={styles.bannerText}>Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner
