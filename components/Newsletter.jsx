import React, { useEffect } from "react"
import styles from "../styles/Newsletter.module.css"

const Newsletter = () => {
  function handleChange(e) {
    e.preventDefault
  }

  return (
    <>
      <div className={styles.newsletterContainer}>
        <div className={styles.newsletterImage}>
          <h1>Get up to 10 listings a day as a subscriber to our newsletter</h1>
          <form>
            <div className={styles.inputGroup}>
              <input
                type="text"
                onChange={handleChange}
                placeholder="enter your email address"
                className={styles.newsletterInput}
              />
              <button>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Newsletter
