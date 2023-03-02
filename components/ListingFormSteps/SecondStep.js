import React, { useEffect } from "react"
import styles from "../../styles/ListingForm.module.css"
import Image from "next/image"

function SecondStep({ file, setFile }) {
  const handleImageChange = (e) => {
    const selectedFiles = e.target.files
    const selectedFilesArray = Array.from(selectedFiles)
    const imageArray = selectedFilesArray.map((file1) => {
      return file1
    })
    setFile((previousImages) => previousImages.concat(imageArray))
  }
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                className="file"
                htmlFor="file"
                style={{ textAlign: "center" }}
              >
                Select Image(s) from your computer
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                name="img"
                onChange={handleImageChange}
                multiple
              />

              {file.length > 0 && file.length > 6 ? (
                <p>
                  You cant upload more than 6 images <br />
                  <span>
                    Please delete <b>{file.length - 6}</b> images
                  </span>
                </p>
              ) : (
                ""
              )}

              <label className="file" htmlFor="file">
                <img
                  className={styles.imageforListing}
                  src="/img/upload.png"
                  style={{ width: "20%", height: "30%", cursor: "pointer" }}
                />
              </label>
            </div>
            <div className={styles.imageContainer}>
              {file &&
                file.map((image, index) => {
                  return (
                    <div key={index} className={styles.imageArrayContainer}>
                      <button
                        onClick={() => setFile(file.filter((e) => e !== image))}
                      >
                        Delete
                      </button>
                      <img src={URL.createObjectURL(image)} />
                    </div>
                  )
                })}
            </div>
          </form>
        </div>
      </>
    </>
  )
}

export default SecondStep
