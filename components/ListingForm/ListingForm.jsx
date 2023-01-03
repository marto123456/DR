import React, { useEffect, useState } from "react"
import axios from "axios"
import dynamic from "next/dynamic"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

import { useLocation } from "react-router-dom"
import moment from "moment"
import { useRouter } from "next/router"
import styles from "../../styles/ListingForm.module.css"
import FirstStep from "../ListingFormSteps/FirstStep"
import SecondStep from "../ListingFormSteps/SecondStep"
import ThirdStep from "../ListingFormSteps/ThirdStep"

function ListingForm({ children, state }) {
  // const state = useRouter().state
  console.log(state)
  const [title, setTitle] = useState(state?.title || "")
  const [desc, setDesc] = useState(state?.desc || "")
  const [price, setPrice] = useState(state?.price || "")
  const [cat, setCat] = useState(state?.cat || "")
  const [stat, setStat] = useState(state?.stat || "")
  const [area, setArea] = useState(state?.area || "")
  const [bathrooms, setBathrooms] = useState(state?.bathrooms || "")
  const [bedrooms, setBedrooms] = useState(state?.bedrooms || "")
  const [active, setActive] = useState(false)

  const [checked, setChecked] = useState([])
  const [file, setFile] = useState([])
  const [page, setPage] = useState(0)

  //for single upload
  // const upload = async () => {
  //   try {
  //     const formData = new FormData()
  //     formData.append("file", file)
  //     const res = await axios.post(
  //       "http://localhost:8800/api/v2/upload",
  //       formData
  //     )
  //     return res.data
  //     console.log(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // for multiple uploads
  const upload = async () => {
    try {
      const formData = new FormData()
      for (let index = 0; index < file.length; index++) {
        const file1 = file[index]
        formData.append("file", file1)
      }
      const res = await axios.post(
        `process.env.REACT_APP_API_URL/upload`,
        formData
      )
      return res.data
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <FirstStep
            title={title}
            setTitle={setTitle}
            desc={desc}
            setDesc={setDesc}
            price={price}
            setPrice={setPrice}
            cat={cat}
            setCat={setCat}
            stat={stat}
            setStat={setStat}
            active={active}
            setActive={setActive}
            checked={checked}
            setChecked={setChecked}
            state={state}
          />
        )
      case 1:
        return (
          <SecondStep
            title={title}
            desc={desc}
            price={price}
            active={active}
            setActive={setActive}
            checked={checked}
            setChecked={setChecked}
            file={file}
            setFile={setFile}
          />
        )
      case 2:
        return (
          <ThirdStep
            title={title}
            desc={desc}
            price={price}
            active={active}
            setActive={setActive}
            checked={checked}
            setChecked={setChecked}
            area={area}
            setArea={setArea}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
          />
        )
      default:
        return (
          <FirstStep
            title={title}
            desc={desc}
            price={price}
            active={active}
            setActive={setActive}
          />
        )
    }
  }
  function handlePageNext() {
    setPage(page + 1)
    setActive((current) => !current)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // const imgUrl = await upload();
    const imgUrl = await upload()
    try {
      state
        ? await axios.put(
            `http://localhost:8800/api/v2/listings/listing/${state.id}`,
            {
              title,
              desc,
              // cat,
              // img: file ? imgUrl : "",
            }
          )
        : await axios.post(
            `process.env.REACT_APP_API_URL/listings/listing/`,
            {
              title,
              desc,
              price,
              cat,
              stat,
              amenities: checked,
              area,
              bedrooms,
              bathrooms,
              img: file ? imgUrl : "",

              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            { withCredentials: true }
          )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className={styles.listingFormContainer}>
        <div className={styles.listingForm}>
          {conditionalComponent()}
          <div className={styles.containerForBottons}>
            {page === 0 || page === 1 ? (
              <>
                <div className={styles.listingFormButtonContainer}>
                  <button
                    onClick={handlePageNext}
                    className={styles.listingFormButton}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.listingFormButtonContainer}>
                <button
                  onClick={handleSubmit}
                  className={styles.listingFormButton}
                >
                  Submit
                </button>
              </div>
            )}

            {page > 0 && (
              <div className={styles.listingFormButtonContainer}>
                <button
                  className={styles.listingFormButton}
                  onClick={() => setPage(page - 1)}
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingForm
