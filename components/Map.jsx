import React, { useEffect } from "react"
import styles from "../styles/Map.module.css"

function Map() {
  return (
    <>
      <div className={styles.mapContainer}>
        <div className={styles.mapouter}>
          <div className={styles.gmap_canvas}>
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=No%2084%20emeka%20anyaoku%20street%20garki%20area%208%20abuja&t=k&z=3&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>

            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default Map
