import React, { useEffect } from "react"
import ListingCard from "./ListingCard"
import styles from "../styles/Listings.module.css"
import Tabs from "./TabComponent2/Tabs"

const Listings = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Browse Our Listings Portfolio</h2>
        <p>These listings are our latest proerties for sale by categories</p>
        <Tabs />
        <button className={styles.navButton}>Load More Listings</button>
      </div>
    </>
  )
}

export default Listings
