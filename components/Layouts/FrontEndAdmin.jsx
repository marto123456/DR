import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Sidebar from "../FrontEnd/SideBar"
import styles from "../../styles/Dashboard.module.css"
import Layout2 from "./Layout2"

const FrontEndAdmin = ({ children }) => {
  let dashboardTitle
  let dashboard = useRouter().asPath.replace("/dashboard", "")

  const loc = useRouter().asPath.split("/")[1]
  console.log(loc)
  if (loc === "my-properties") {
    dashboardTitle = "My Properties"
  } else if (loc === "dashboard") {
    dashboardTitle = "Dashboard"
  } else if (loc === "profile") {
    dashboardTitle = "Profile"
  } else {
    dashboardTitle = ""
  }
  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardHeader}>
          <h1>{dashboardTitle}</h1>
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
