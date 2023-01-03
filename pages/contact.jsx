import React from "react"
import Layout2 from "../components/Layouts/Layout2"
import Service from "../components/Service"
import styles from "../styles/Contact.module.css"
const contact = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h1>Contact Us</h1>
        </div>
        <div className={styles.ourContactContainer}>
          <div className={styles.ourContactCardLeft}>
            <div className={styles.contactCard}>
              <h3>Address</h3>
              <h4>No 123 Sahara 4 Estate Lokogoma Abuja Island</h4>
              <h3>Phone:</h3>
              <h4>08077777777</h4>
              <h3></h3>
              <h4></h4>
            </div>
          </div>
          <div className={styles.ourContactCardRight}>
            <div className={styles.contactCard}>
              <h2> We Really Want To Hear From You</h2>
              <div className={styles.contactInputGroup}>
                <label>Email</label>
                <input type="email" />
              </div>
              <div className={styles.contactInputGroup}>
                <label>Your Name</label>
                <input type="text" />
              </div>
              <div className={styles.contactInputGroup}>
                <label>Message</label>
                <input type="email" />
              </div>
              <p>
                Please note that your details will not be shared with anyone
                else
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>d</p>
    </>
  )
}

contact.getLayout = (page) => <Layout2>{page}</Layout2>

export default contact
