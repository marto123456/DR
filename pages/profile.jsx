import React from "react"
import Link from "next/link"
import Layout2 from "../components/Layouts/Layout2"
import Service from "../components/Service"
import styles from "../styles/Dashboard.module.css"
import FrontEndAdmin from "../components/Layouts/FrontEndAdmin"
const profile = () => {
  return (
    <>
      <FrontEndAdmin>
        <form>
          <div className={styles.profileForm}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input type="text" />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" />
            </div>
            <div className={styles.inputGroup}>
              <label>Username</label>
              <input type="text" />
            </div>
            <button>Update Profile</button>
          </div>
        </form>
      </FrontEndAdmin>
    </>
  )
}

profile.getLayout = (page) => <Layout2>{page}</Layout2>

export default profile
