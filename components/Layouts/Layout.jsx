import styles from "../../styles/Layout.module.css"
import TopNav from "../TopNav"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <TopNav />
        <Navbar />
        <div className={styles.bannerHeader}>
          <div className={styles.bannerTextContainer}>
            <h1>Find A Dream Apartment in Abuja</h1>
            <h4>
              We are recognized for exceeding clients expectations and
              delivering great results through dedication, ease of process, and
              extraordinary services to our worldwide clients.
            </h4>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </>
  )
}

export default Layout
