import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"
import styles from "../../../styles/ListingForm.module.css"
import { faOptinMonster } from "@fortawesome/free-brands-svg-icons"

function FirstStep({
  title,
  desc,
  price,
  cat,
  stat,
  setTitle,
  setDesc,
  setPrice,
  setCat,
  setStat,
  active,
  setActive,
  state,
  listing,
  setListing,
  area,
  setArea,
}) {
  const options = [
    "apartments",
    "land",
    "estate",
    "penthouse",
    "hotel",
    "homes",
  ]
  const options1 = ["Rent", "Sale"]
  return (
    <>
      <div className={styles.FirstStepContainer}>
        <form>
          <ol>
            <li className={active ? "active" : ""}>1. Description</li>
            <li className={active ? "active" : ""}>2. Media</li>
            <li className={active ? "active" : ""}>3. Location</li>
            <li className={active ? "active" : ""}>4. Details</li>
            <li className={active ? "active" : ""}>5. Amenities</li>
          </ol>

          <p>
            These fields are mandatory: Title, Property Media, Property Address
          </p>
          <h3>Property Description</h3>
          <div className={styles.formControl}>
            <label>*Title (mandatory)</label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className={styles.formControl}>
            <label>Description</label>
            <ReactQuill
              className="editor"
              name="desc"
              theme="snow"
              value={desc}
              onChange={setDesc}
            />
          </div>
          <h3>Property Price</h3>
          <div className={styles.formControlDisplayFlex}>
            <div className={styles.formControl} style={{ flex: "1" }}>
              <label>*Price in $ (only numbers)</label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            {/* <div className={styles.formControl} style={{ flex: "1" }}>
              <label>*Status (mandatory)</label>
              <input type="text" name="price" />
            </div> */}
          </div>
          {/* <div className={styles.formControlDisplayFlex}>
            <div className={styles.formControl} style={{ flex: "1" }}>
              <label>*Title (mandatory)</label>
              <input type="text" value="" />
            </div>
            <div className={styles.formControl} style={{ flex: "1" }}>
              <label>*Title (mandatory)</label>
              <input type="text" value="" />
            </div>
          </div> */}
          {/* <div className={styles.formControlDisplayFlex}>
            <div className={styles.formControl} style={{ flex: "1" }}>
              <label>*Title (mandatory)</label>
              <input type="text" value="" />
            </div>
          </div> */}
          <h3>Select Categories</h3>
          <div className={styles.formControlDisplayFlex}>
            <div className={styles.formControl} style={{ flex: "1" }}>
              <label>* Listing Category</label>
              <select
                name="cat"
                onChange={(e) => setCat(e.target.value)}
                value={cat}
                className={styles.firstStepSelect}
              >
                {options.map((option, index) => {
                  return (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  )
                })}
              </select>
            </div>
            {/* <div className={styles.formControl} style={{ flex: "1" }}>
              <label>Listed In</label>
              <input
                type="text"
                value=""
                onChange={(e) => setList(e.target.value)}
              />
            </div> */}
          </div>
          <h3>Select Property Status</h3>
          <div className={styles.formControlDisplayFlex}>
            <div className={styles.formControl} style={{ flex: "1" }}>
              <label>Property Status</label>
              <select
                name="stat"
                value={stat}
                onChange={(e) => setStat(e.target.value)}
                className={styles.firstStepSelect}
              >
                {options1.map((option1, index) => {
                  return (
                    <option value={option1} key={index}>
                      {option1}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default FirstStep
