import React, { useEffect } from "react"
import styles from "../../../styles/admin/admin.module.css"

function Sidebar() {
  return (
    <>
      <div className={styles.sideBar}>
        <div className={styles.titleContainer}>
          <h2>Icon</h2>
          <h1>Discoveality</h1>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <div className={styles.icon}>icon</div>
            <span>Dashboard</span>
          </div>
          <div className={styles.links}>
            <div className={styles.icon}>icon</div>
            <span>Dashboard</span>
          </div>
          <div className={styles.links}>
            <div className={styles.icon}>icon</div>
            <span>Dashboard</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
