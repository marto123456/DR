import React, { useEffect } from "react"
import styles from "../../styles/ListingForm.module.css"

function SecondStep({ file, setFile }) {
  return (
    <>
      <>
        <div className={styles.FirstStepContainer}>
          <form>
            <ol>
              <li>1. Description</li>
              <li>2. Media / Location</li>
              <li>3. Amenities</li>
              <li>4. Details</li>
            </ol>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="file" htmlFor="file">
                Select Image from your computer
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                name="img"
                onChange={(e) => setFile(e.target.files)}
                multiple
              />

              <label className="file" htmlFor="file">
                <img
                  src="img/upload.png"
                  style={{ width: "30%", height: "30%" }}
                />
              </label>
            </div>
          </form>
        </div>
      </>
    </>
  )
}

export default SecondStep
