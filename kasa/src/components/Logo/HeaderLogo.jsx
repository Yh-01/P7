import logo from '../../assets/LOGO.png'
import styles from './Logo.module.css'

function Logo() {
  return <img className={styles.headerLogo} src={logo} alt="" />
}

export default Logo
