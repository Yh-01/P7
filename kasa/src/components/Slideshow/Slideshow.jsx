import styles from './Slideshow.module.css'
import React, { useState } from 'react'
import arrow from '../../assets/chevron.png'

// Fonction pour passer à la photo précédente ou dernière photo
function previousPicture(currentIndex, setCurrentIndex, photos) {
  if (currentIndex === 0) {
    setCurrentIndex(photos.length - 1)
  } else {
    setCurrentIndex(currentIndex - 1)
  }
}

// Fonction pour passer à la photo suivante ou revenir sur la première
function nextPicture(currentIndex, setCurrentIndex, photos) {
  if (currentIndex === photos.length - 1) {
    setCurrentIndex(0)
  } else {
    setCurrentIndex(currentIndex + 1)
  }
}

//Fonction affichage du slide
function Slideshow(props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentPicture = props.photos[currentIndex]

  return (
    <div className={styles.container}>
      <img className={styles.picture} src={currentPicture} alt="Logement" />
      {/* Condition d'affichage des flèches */}
      {props.photos.length > 1 ? (
        <React.Fragment>
          <div className={styles.back} onClick={() => previousPicture(currentIndex, setCurrentIndex, props.photos)}>
            <img className={styles.backArrow} alt="Back" src={arrow} />
          </div>
          <div className={styles.forward} onClick={() => nextPicture(currentIndex, setCurrentIndex, props.photos)}>
            <img className={styles.forwardArrow} alt="Forward" src={arrow} />
          </div>
          <div className={styles.page}>
            <p>
              {currentIndex + 1}/{props.photos.length}
            </p>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  )
}
export default Slideshow
