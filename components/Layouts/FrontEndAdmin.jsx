import React, { useEffect } from "react"
import Sidebar from "../FrontEnd/SideBar"
import styles from "../../styles/Dashboard.module.css"

const FrontEndAdmin = ({ children }) => {
  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardHeader}>
          <h1>Dashboard</h1>
        </div>
        <div className={styles.ourDashboardContainer}>
          <Sidebar />
          <div className={styles.dashboardRight}>{children}</div>
        </div>
      </div>
    </>
  )
}

FrontEndAdmin.getLayout = (page) => <Layout2>{page}</Layout2>

export default FrontEndAdmin
