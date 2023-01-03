import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/authContext.js"
import Link from "next/link"

const Navbar = () => {
  const [navColor, setnavColor] = useState("transparent")
  const [navSticky, setnavSticky] = useState({})
  const listenScrollEvent = (e) => {
    window.scrollY > 40 ? setnavColor("#04534f") : setnavColor("transparent")
    window.scrollY > 40
      ? setnavSticky({
          position: "fixed",
          top: "0",
          zindex: "999",
          width: "100%",
          transition: "all 0.5s linear",
          animation: "500ms ease-in-out 0s normal none 1 running fadeInDown",
        })
      : setnavSticky({
          position: "",
          top: "",
          zindex: "",
          width: "",
          transition: "",
          animation: "",
        })
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  }, [])

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: navColor,
        position: `${navSticky.position}`,
        top: `${navSticky.top}`,
        zIndex: `${navSticky.zindex}`,
        width: `${navSticky.width}`,
        animation: `${navSticky.animation}`,
        transition: `${navSticky.transition}`,
      }}
    >
      <div className={styles.navLogo}>
        {/* <Image src="" height="50" width="70" /> */}
      </div>
      <ul className={styles.navLists}>
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <button>About</button>
          </Link>
        </li>
        <li>
          <Link href="/our-services">
            <button>Services</button>
          </Link>
        </li>
        <li>
          <Link href="/listings">
            <button>Listings</button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <button>Contact</button>
          </Link>
        </li>
      </ul>
      <ul className={styles.navButtonList}>
        <li>
          <div className={styles.dropdown}>
            <img className={styles.dropbtn} src="img/user.jpg" />
            <div className={styles.dropdownContent}>
              <Link href="/my-properties">My Properties </Link>
              <Link href="/profile">Profile</Link>
              <Link href="/add-listing">Add Listing</Link>
            </div>
          </div>
        </li>
        <li>
          <Link href="add-listing">
            <button className={styles.navButton}>Add Listing</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
