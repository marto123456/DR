import React from "react"
import { useContext } from "react"
import Link from "next/link"
import Layout2 from "../components/Layouts/Layout2"
import Service from "../components/Service"
import { AuthContext } from "../context/authContext"
import styles from "../styles/Dashboard.module.css"
import FrontEndAdmin from "../components/Layouts/FrontEndAdmin"
const Profile = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      <FrontEndAdmin>
        <form>
          <div className={styles.profileForm}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input type="text" value={currentUser.username} />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" value={currentUser.email} />
            </div>
            <div className={styles.inputGroup}>
              <label>Username</label>
              <input type="text" value={currentUser.username} />
            </div>
            <button>Update Profile</button>
          </div>
        </form>
      </FrontEndAdmin>
    </>
  )
}

Profile.getLayout = (page) => <Layout2>{page}</Layout2>

export default Profile
