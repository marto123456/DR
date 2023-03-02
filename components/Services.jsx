import React, { useEffect } from "react"
import Link from "next/link"
import styles from "../styles/Services.module.css"
import Service from "./Service"

const Services = () => {
  return (
    <>
      <div className={styles.skewedServicesContainer}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesLeft}>
            <h2>
              We help our Clients Sell, Buy or Rent properties without hassle
            </h2>
            <p>
              Utilizing his exceptional experience and knowledge of the luxury
              waterfront markets, Roland serves an extensive and elite worldwide
              client base. He enjoys a reputation as a tenacious Broker.
            </p>
            <ul>
              <li>24/7 Support available</li>
              <li>Expert Legal Support</li>
              <li>Free submission on our website</li>
              <li>Home Loan assistance</li>
            </ul>
            <Link href="/contact">
              <button style={{ cursor: "pointer" }}>Contact Us Today</button>
            </Link>
          </div>
          <div className={styles.servicesRight}>
            <Service />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
