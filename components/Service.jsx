import React, { useEffect } from "react"
import styles from "../styles/Service.module.css"

const Service = () => {
  return (
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.cardColumn1}>
          <div className={styles.card}>
            <p>icon</p>
            <h4>Sell Your Home</h4>
            <p>We do a free evaluation to be sure you want to start selling</p>
          </div>
          <div className={styles.card}>
            <p>icon</p>
            <h4>Buy a home</h4>
            <p>We do a free evaluation to be sure you want to start selling</p>
          </div>
        </div>
        <div className={styles.cardColumn2}>
          <div className={styles.card}>
            <p>icon</p>
            <h4>Free Photoshoot</h4>
            <p>We do a free evaluation to be sure you want to start selling</p>
          </div>
          <div className={styles.card}>
            <p>icon</p>
            <h4>Free Appraisal</h4>
            <p>We do a free evaluation to be sure you want to start selling</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
