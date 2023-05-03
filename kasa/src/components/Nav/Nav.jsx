import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
  return (
    <div className={styles.navBar}>
      <NavLink exact to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.homeLink)}>
        Accueil
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? styles.activeLink : styles.aboutLink)}>
        A Propos
      </NavLink>
    </div>
  )
}
export default Nav
