import React, { useState } from 'react'
import styles from './Collapse.module.css'
import chevron from '../../assets/chevron.png'

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [margin, setMargin] = useState(20)
  const [isrotated, setIsRotated] = useState(false)

  const openText = () => {
    setIsOpen(!isOpen)
    setMargin(isOpen ? 20 : 220)
    setIsRotated(!isrotated)
  }
  return (
    <div className={styles.container} style={{ marginBottom: margin }}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.icone} onClick={openText}>
        <img src={chevron} className={`${styles.iconeImage} ${isrotated ? styles.rotate : ''}`} alt="Voir plus" />
        {isOpen && (
          <div className={styles.collapseText}>
            <p className={styles.text}>{props.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Collapse