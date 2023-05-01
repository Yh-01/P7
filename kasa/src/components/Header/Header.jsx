import Logo from '../Logo/HeaderLogo'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'

// Création du header pour le layout
function Header() {
  return (
    <header className={styles.banner}>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header
