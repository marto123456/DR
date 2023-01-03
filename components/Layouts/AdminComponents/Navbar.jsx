import React, { useEffect } from "react"
import styles from "../../../styles/admin/admin.module.css"

function Navbar() {
  return (
    <>
      <div className={styles.topSection}>
        <div>Search Input and Icon</div>
        <div className={styles.circleForProfile}></div>
      </div>
    </>
  )
}

export default Navbar
