import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import classNames from "classnames"
import { AuthContext } from "../context/authContext.js"
import Link from "next/link"
import { useRouter } from "next/router"
import MobileNavLinks from "./MobileNavLinks"

const NavbarOther = () => {
  const router = useRouter()
  const [navColor, setnavColor] = useState("#04534f")
  const [navSticky, setnavSticky] = useState({})
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const listenScrollEvent = (e) => {
    window.scrollY > 40 ? setnavColor("#04534f") : setnavColor("#04534f")
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
  const active = classNames("mobileMenu", {
    open: mobileNavOpen,
  })
  const { currentUser, logout } = useContext(AuthContext)
  return (
    <>
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
          <Link href="/">
            <img
              height="50"
              width="70"
              src="/img/logo.png"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className="navigationlinks">
          <button
            className={active}
            onClick={() => {
              setMobileNavOpen((mobileNavOpen) => !mobileNavOpen)
            }}
          >
            <div className="barOne"></div>
            <div className="barTwo"></div>
            <div className="barThree"></div>
          </button>
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
        {currentUser ? (
          <ul className={styles.navButtonList}>
            <li>
              <div className={styles.dropdown}>
                <img className={styles.dropbtn} src="/img/user.jpg" />
                <div className={styles.dropdownContent}>
                  <Link href="/my-properties">My Properties </Link>
                  <Link href="/profile">Profile</Link>
                  <Link href="/add-listing">Add Listing</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </div>
            </li>
            <li>
              <Link href="/add-listing">
                <button className={styles.navButton}>Add Listing</button>
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
      <MobileNavLinks open={mobileNavOpen} />
    </>
  )
}

export default NavbarOther
