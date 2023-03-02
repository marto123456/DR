import React from "react"
import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import axios from "axios"
import { AuthContext } from "../context/authContext"
// import NextAuth from "next-auth"
// import { useSession } from "next-auth/react"
import Layout2 from "../components/Layouts/Layout2"
import Service from "../components/Service"
import styles from "../styles/Dashboard.module.css"
import FrontEndAdmin from "../components/Layouts/FrontEndAdmin"
const dashboard = () => {
  const { currentUser } = useContext(AuthContext)

  const [listings, setListings] = useState([])
  const cat = useRouter().asPath.replace("/dashboard", "")
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${process.env.NEXT_PUBLIC_ENV}/listings/dashboardListing`
  //       )

  //       setListings(res.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchData()
  // }, [])
  console.log(listings)

  if (!currentUser) {
    return <p>Access Denied</p>
  } else {
    return (
      <>
        <FrontEndAdmin>
          <div className={styles.dashboardListingCard}>
            <div className={styles.dashboardListingItem}>
              <h2>Help Center</h2>
              <ol>
                <li>
                  <a>How to add listings/properties</a>
                </li>
                <li>
                  <a>What is our vetting algorithm</a>
                </li>
              </ol>
            </div>

            <div className={styles.dashboardListingItem}>
              {/* <h2>Listings</h2>
            {listings.title}
            <p>{currentUser.username === listings.username && <b>Edit</b>}</p> */}

              <h2>Quick Links</h2>
              <ul>
                <li>About</li>
                <li>Our Terms</li>
                <li>OUr Services</li>
              </ul>
            </div>
          </div>
          <h1>Announcments</h1>
          <div className={styles.dashboardListingCard}>
            <div className={styles.dashboardListingItem1}>
              {/* <h2>Listings</h2>
            {listings.title}
            <p>{currentUser.username === listings.username && <b>Edit</b>}</p> */}
            </div>
          </div>
          <h2>Computer Security Alert</h2>
          <div className={styles.dashboardListingCard}>
            <div className={styles.dashboardListingItem1}>
              {/* <h2>Listings</h2>
            {listings.title}
            <p>{currentUser.username === listings.username && <b>Edit</b>}</p> */}
            </div>
          </div>
        </FrontEndAdmin>
      </>
    )
  }
}

dashboard.getLayout = (page) => <Layout2>{page}</Layout2>

export default dashboard
