import styles from "../../styles/Layout.module.css"

import Footer from "../Footer"
import NavbarOther from "../NavbarOther"

const Layout2 = ({ children }) => {
  return (
    <>
      <NavbarOther />
      {children}
      <Footer />
    </>
  )
}

export default Layout2
