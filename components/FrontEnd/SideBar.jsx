import Link from "next/link"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import styles from "../../styles/Dashboard.module.css"

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      <div className={styles.dashboardLeft}>
        <img src="img/user.jpg" style={{ height: "300px", width: "100%" }} />
        <h2>{currentUser.username}</h2>
        {/* <h2>Nigeria</h2> */}
        <hr />
        <ul className={styles.dashboardUl}>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/my-properties">My Properties</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/profile">Change Password</Link>
          </li>
          <li>
            <Link href="/logout">Logout</Link>
          </li>
          <li>
            <Link href="/dashboard">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
