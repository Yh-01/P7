import FooterLogo from '../Logo/FooterLogo'
import styles from './Footer.module.css'

// Création du footer pour le layout
function Footer() {
  return (
    <footer className={styles.footerBanner}>
      <FooterLogo />
      <div className={styles.footerText}>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
