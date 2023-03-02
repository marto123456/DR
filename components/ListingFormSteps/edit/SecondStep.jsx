import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../../../styles/ListingForm.module.css"

function SecondStep({ image, setImage, file, setFile, file2, setFile2 }) {
  // console.log("file")
  const selectedFilesArray1 = JSON.parse(file2)
  // console.log(selectedFilesArray1)
  // setFile(image.concat(file2))
  console.log(image)
  const imageArray1 = selectedFilesArray1.map((file1) => {
    return file1
  })
  const handleImageChange = (e) => {
    const selectedFiles = e.target.files
    const selectedFilesArray = Array.from(selectedFiles)
    const imageArray = selectedFilesArray.map((file1) => {
      return file1
    })

    setImage((previousImages) => previousImages.concat(imageArray))

    // const t = file2.concat(image)
    // console.log(t)
  }
  setFile(image)

  // console.log(imageArray)

  // setFile((previousImages) => previousImages.concat(imageArray))

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
                onChange={handleImageChange}
                multiple
              />

              <label className="file" htmlFor="file">
                <img
                  src="/img/upload.png"
                  style={{ width: "10%", height: "30%", cursor: "pointer" }}
                />
              </label>
            </div>
            <hr />

            {/* {file && (
              <div>
                <img src={URL.createObjectURL(file)} />
              </div>
            )} */}
            <div className={styles.imageContainer}>
              {imageArray1 &&
                imageArray1.map((image, index) => {
                  return (
                    <div className={styles.imageArrayContainer} key={index}>
                      {/* <button
                        onClick={() =>
                          setImage(imageArray1.filter((e) => e !== image))
                        }
                      >
                        Delete
                      </button> */}

                      <img src={`/upload/${image}`} />
                    </div>
                  )
                })}
            </div>
            <div className={styles.imageContainer}>
              {image &&
                image.map((image, index) => {
                  return (
                    <div key={index} className={styles.imageArrayContainer}>
                      <button
                        onClick={() => setFile(file.filter((e) => e !== image))}
                      >
                        Delete
                      </button>
                      <img src={URL.createObjectURL(image)} key={index} />
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
