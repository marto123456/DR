import React, { useEffect } from "react"
import Admin from "../../components/Layouts/Admin"
import styles from "../../styles/admin/admin.module.css"

function AdminIndex() {
  return (
    <>
      <div className={styles.mainDashboard}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>1</div>
          <div className={styles.gridItem}>2</div>
          <div className={styles.gridItem}>3</div>
          <div className={styles.gridItem}>4</div>
        </div>
      </div>
    </>
  )
}

AdminIndex.getLayout = (page) => <Admin>{page}</Admin>
export default AdminIndex
