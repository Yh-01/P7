import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.css'
import image from '../../assets/404.png'

// Affichage de la page erreur
function Error() {
  return (
    <div className={styles.container}>
      <img className={styles.title} src={image} alt="404" />
      <p className={styles.text}>
        Oups! La page que <br />
        vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.linkHome}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
export default Error
