import React, { useEffect, useState, useContext } from "react"
import axios from "axios"

import dynamic from "next/dynamic"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

import { useLocation } from "react-router-dom"
import moment from "moment"
import { useRouter } from "next/router"
import Link from "next/link"
import { AuthContext } from "../../../context/authContext"
import styles from "../../../styles/ListingForm.module.css"
import FirstStep from "../../../components/ListingFormSteps/edit/FirstStep"
import SecondStep from "../../../components/ListingFormSteps/edit/SecondStep"
import ThirdStep from "../../../components/ListingFormSteps/edit/ThirdStep"
import Layout2 from "../../../components/Layouts/Layout2"

function EditListing() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [cat, setCat] = useState("")
  const [stat, setStat] = useState("")
  const [area, setArea] = useState("")
  const [bathrooms, setBathrooms] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [user, setUser] = useState()
  const [active, setActive] = useState(false)

  const [checked, setChecked] = useState([])
  const [file, setFile] = useState([])
  const [image, setImage] = useState([])
  const [file2, setFile2] = useState([])
  const [page, setPage] = useState(0)

  const { currentUser } = useContext(AuthContext)

  const [listing, setListing] = useState({})
  const location = useRouter()
  const listingId = location.asPath.split("/")[3]

  const onChangeTitle = (newValue) => {
    console.log(setTitle(newValue))
  }

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_ENV}/listings/listing/${listingId}`
        )
        console.log(res)
        setTitle(res.data.title)
        setDesc(res.data.desc)
        setPrice(res.data.price)
        setFile2(res.data.img)
        setBathrooms(res.data.bathrooms)
        setBedrooms(res.data.bedrooms)
        setArea(res.data.area)
        setCat(res.data.cat)
        setStat(res.data.stat)
        setUser(res.data.username)
        // setChecked(res.data.checked)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [listingId])

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
        `${process.env.NEXT_PUBLIC_ENV}/upload`,
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
            listing={listing}
            setListing={setListing}
            area={area}
            setArea={setArea}
            onChangeTitle={onChangeTitle}
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
            area={area}
            setArea={setArea}
            checked={checked}
            setChecked={setChecked}
            image={image}
            setImage={setImage}
            file={file}
            setFile={setFile}
            file2={file2}
            setFile2={setFile2}
            listing={listing}
            setListing={setListing}
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
            listing={listing}
            setListing={setListing}
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
      await axios.put(
        `${process.env.NEXT_PUBLIC_ENV}/listings/listing/${listingId}`,
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
      Router.push("/listings")
    } catch (err) {
      console.log(err)
    }
  }

  if (currentUser.username != user) {
    return (
      <div
        style={{
          margin: "100px 0",
          padding: "100px 0",
          width: "10px auto",
          background: "green",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>Sorry, You are not allowed to view this page{listing.username}</h2>
        <Link href="/">
          <button
            style={{
              padding: "20px",
              width: "200px",
              background: "white",
              color: "green",
              marginTop: "50px",
              cursor: "pointer",
              fontWeight: "800",
            }}
          >
            Access Denied
          </button>
        </Link>
      </div>
    )
    router.push("/login")
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

EditListing.getLayout = (page) => <Layout2>{page}</Layout2>

export default EditListing
