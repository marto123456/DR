import classNames from "classnames"
import React, { useEffect, useContext } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { AuthContext } from "../../context/authContext"
// import "./topbar.css"
import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const MobileNavLinks = ({ open }) => {
  const displayMobileNavLinks = classNames("mobilenavwrapper", {
    open: open,
  })

  // const handleClick = () => {
  //   if (user) {
  //     navigate("/add-listing")
  //   } else {
  //     navigate("/login")
  //   }
  // }
  // check the globals.css for css related to mobilenavwrapper which is outputed by displayMobileNavLinks
  return (
    <>
      <nav className={displayMobileNavLinks}>
        <ul>sdsdsd</ul>
      </nav>
    </>
  )
}

export default MobileNavLinks
