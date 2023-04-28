import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
  return (
    <div className={styles.navBar}>
      <Link className={styles.homeLink} to="/">
        Accueil
      </Link>
      <Link className={styles.aboutLink} to="/about">
        A Propos
      </Link>
    </div>
  )
}
export default Nav
