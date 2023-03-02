import React from "react"
import Link from "next/link"
import Layout2 from "../components/Layouts/Layout2"
import Service from "../components/Service"
import styles from "../styles/ourServices.module.css"
const ourServices = () => {
  return (
    <>
      <div className={styles.ourServicesContainer}>
        <div className={styles.ourServicesHeader}>
          <h1>Our Services</h1>
        </div>
        <div className={styles.ourService}>
          <div className={styles.ourServiceLeft}>
            <img src="img/services/service.jpg" />
          </div>
          <div className={styles.ourServiceRight}>
            <h4>Our Service</h4>
            <h1>
              We are In the Business of Helping people buy and sell properties 9
            </h1>
            <div className={styles.ourServiceUlContainer}>
              <ul>
                <li>Top Listed Properties</li>
                <li>Support</li>
                <li>100% Satisfied Customers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.whatWeOffer}>
          <div className={styles.whatWeOfferContainer}>
            <div className={styles.whatWeOfferLeft}>
              <h1>Our Properties Wil Change The Way You Live</h1>
              <p>
                Dictum taciti luctus suspendisse auctor imperdiet fringilla
                parturient. Phasellus blandit cras ultrices elementum magnis
                consectetuer aenean cursus torquent. Pulvinar felis lorem mollis
                ipsum tincidunt lobortis mattis auctor semper. Tristique
                facilisi netus letius scelerisque nec fames torquent nulla
                nullam erat.
              </p>
              <Link href="/contact">
                <button className={styles.ourServicesButton}>Contact Us</button>
              </Link>
            </div>
            <div className={styles.whatWeOfferRight}>
              <Service />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ourServices.getLayout = (page) => <Layout2>{page}</Layout2>

export default ourServices
