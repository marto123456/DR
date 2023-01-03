import React from "react"
import Link from "next/link"
import Layout2 from "../components/Layouts/Layout2"
import Service from "../components/Service"
import styles from "../styles/Dashboard.module.css"
import FrontEndAdmin from "../components/Layouts/FrontEndAdmin"
const dashboard = () => {
  return (
    <>
      <FrontEndAdmin>
        <div className={styles.dashboardListingCard}>
          <div className={styles.dashboardListingItem}>
            <h2>Listings</h2>
            <p>
              <b>12</b>
            </p>
          </div>
        </div>
      </FrontEndAdmin>
    </>
  )
}

dashboard.getLayout = (page) => <Layout2>{page}</Layout2>

export default dashboard
