import Link from "next/link"
import styles from "../../styles/Dashboard.module.css"

const Sidebar = () => {
  return (
    <>
      <div className={styles.dashboardLeft}>
        <img src="img/user.jpg" style={{ height: "300px", width: "100%" }} />
        <h2>Ogbonna Martins</h2>
        <h2>Nigeria</h2>
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
