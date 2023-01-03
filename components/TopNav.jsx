import styles from "../styles/Topbar.module.css"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" // Import the FontAwesomeIcon component
import {
  faFacebookF,
  faGoogle,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons" // import the icons you n

import {
  faChat,
  faHeart,
  faTelephone,
} from "@fortawesome/free-regular-svg-icons" // import the icons you n

const TopNav = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.social_Icons}>
          <li>
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ fontSize: 14, color: "white" }}
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ fontSize: 14, color: "white" }}
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ fontSize: 14, color: "white" }}
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 14, color: "white" }}
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: 14, color: "white" }}
            />
          </li>
        </ul>
        <ul className={styles.topbar_Contact}>
          <li className={styles.item}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ fontSize: 12, color: "white" }}
            />
            <p>Favourite</p>
          </li>
          <li className={styles.item}>
            <FontAwesomeIcon
              icon={faChat}
              style={{ fontSize: 12, color: "white" }}
            />
            <p>info@gmail.com</p>
          </li>
          <li className={styles.item}>
            <FontAwesomeIcon
              icon={faTelephone}
              style={{ fontSize: 12, color: "black" }}
            />
            <p>+2349057577342</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default TopNav
