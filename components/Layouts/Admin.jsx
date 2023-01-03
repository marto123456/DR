import React, { useEffect } from "react"
import Sidebar from "./AdminComponents/Sidebar"
import Footer from "./AdminComponents/Footer"
import Navbar from "./AdminComponents/Navbar"

const Admin = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Admin
