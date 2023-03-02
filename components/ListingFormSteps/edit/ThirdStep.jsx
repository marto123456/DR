import React, { useEffect } from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"
import styles from "../../../styles/ListingForm.module.css"

function ThirdStep({
  active,
  setActive,
  checked,
  setChecked,
  area,
  setArea,
  bedrooms,
  setBedrooms,
  listing,
  setListing,
  bathrooms,
  setBathrooms,
}) {
  console.log(listing)
  const checkList = [
    "Apple",
    "Banana",
    "Tea",
    "Coffee",
    "Apple",
    "Banana",
    "Tea",
    "Coffee",
    "Apple",
    "Banana",
    "Tea",
    "Coffee",
    "Apple",
    "Banana",
    "Tea",
    "Coffee",
    "Apple",
    "Banana",
    "Tea",
    "Coffee",
  ]
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked]
    console.log(updatedList)
    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1)
    }
    setChecked(updatedList)
  }

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item
      })
    : ""

  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item"

  console.log(listing)
  return (
    <>
      <div className={styles.FirstStepContainer}>
        <form>
          <ol>
            <li className={active ? "active" : ""}>1. Description</li>
            <li className={active ? "active" : ""}>2. Media / Location</li>
            <li className={active ? "active" : ""}>3. Amenities</li>
            <li className={active ? "active" : ""}>4. Details</li>
          </ol>

          <h3>Features</h3>
          <div className={styles.formControl}>
            <label>Area</label>
            <input
              type="number"
              name="area"
              defaultValue={area || ""}
              onChange={(e) => setArea(e.target.value)}
            />
            <label>Number of Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              defaultValue={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
            <label>Number of Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              defaultValue={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            />
          </div>

          <hr style={{ marginBottom: "70px" }} />
          <h3>Amenities</h3>
          <div className={styles.formControlDisplayFlex}>
            {checkList.map((item, index) => (
              <div
                key={index}
                className={styles.amenitiesInputContainer}
                style={{ width: "30%" }}
              >
                <label>
                  <input
                    value={item}
                    name="checked[]"
                    onChange={handleCheck}
                    type="checkbox"
                    className={styles.inputCheckbox}
                  />
                  <span className={isChecked(item)}>{item}</span>
                </label>
              </div>
            ))}
          </div>

          <div className={styles.formControlDisplayFlex}>
            <div>{`Items checked are: ${checkedItems}`}</div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ThirdStep
