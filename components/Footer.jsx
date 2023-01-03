import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerArea}>
          <div className={styles.aboutArea}>
            <h4>About</h4>
            <p>
              Our Real Estate company is committed to delivering a high level of
              expertise, customer service and attention to detail to the
              marketing and sales of luxury real estate and maany more rental
              properties
            </p>
          </div>
          <div className={styles.contactArea}>
            <h4>Contact Us</h4>
            <p>No 4 Emeka Anyaoku Street Garki Area something</p>
            <p>08055555555</p>
            <p>og@gmail.com</p>
          </div>

          <div className={styles.listingsArea}>
            <h4>Listing</h4>
            <ul>
              <li>Apartments</li>
              <li>Hotels</li>
              <li>Homes</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooterArea}>
        <div className={styles.bottomFooter}>
          <div className={styles.copyright}>
            <p>Copyright &copy; 2022. All rights reserved</p>
          </div>

          <ul className={styles.bottomFooterUl}>
            <li>
              <a>Documentation</a>
            </li>
            <li>
              <Link href="/login">
                <a>Client Area</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
