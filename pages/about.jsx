import React from "react"
import Layout2 from "../components/Layouts/Layout2"
import Service from "../components/Service"
import styles from "../styles/About.module.css"
const about = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <h1>About Us</h1>
        </div>
        <div className={styles.ourCommitmentContainer}>
          <div className={styles.ourCommitment}>
            <div className={styles.ourCommitmentLeft}>
              <h1>Because a Home should rightfully be a Home</h1>
              <p>
                Quam gravida fusce conubia netus parturient amet eros senectus
                venenatis. Blandit consectetur interdum condimentum si velit.
                Morbi est luctus nascetur per dolor inceptos leo tortor
                phasellus ante.
              </p>
              <div className={styles.visionMissionContainer}>
                <div className={styles.vission}>
                  <h2>Our Vision</h2>
                  <p>
                    Phasellus magnis consequat maximus dis condimentum massa
                    vulputate erat fames urna. Tellus ex vitae hac quis eleifend
                    aenean arcu nascetur.
                  </p>
                </div>
                <div className={styles.mission}>
                  <h2>Our Mission</h2>
                  <p>
                    Phasellus magnis consequat maximus dis condimentum massa
                    vulputate erat fames urna. Tellus ex vitae hac quis eleifend
                    aenean arcu nascetur.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ourCommitmentRight}>
              <div className={styles.aboutImageLeft}>
                <img
                  src="img/about/about1.jpg"
                  className={styles.about1Image}
                />
              </div>
              <div className={styles.aboutImageRight}>
                <img
                  src="img/about/about2.jpg"
                  className={styles.about2Image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>d</p>
    </>
  )
}

about.getLayout = (page) => <Layout2>{page}</Layout2>

export default about
