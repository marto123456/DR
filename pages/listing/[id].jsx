import React, { useContext } from "react"
import { useEffect, useState } from "react"
import Router, { useRouter } from "next/router"
import axios from "axios"
import Link from "next/link"
import moment from "moment/moment"
import { AuthContext } from "../../context/authContext"
import Layout2 from "../../components/Layouts/Layout2"
import styles from "../../styles/SingleListing.module.css"

// export async function getServerSideProps(params) {
//   const { listingId } = params.query

//   const res = await axios.get(
//     `http://localhost:8800/api/v2/listings/listing/${listingId}`
//   )
//   return {
//     props: {
//       listing: res.data,
//     },
//   }
// }

const Listing = () => {
  const { currentUser } = useContext(AuthContext)

  const [listing, setListing] = useState({})
  const location = useRouter()
  const listingId = location.asPath.split("/")[2]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `process.env.REACT_APP_API_URL/listings/listing/${listingId}`
        )
        // console.log(res)
        setListing(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [listingId])

  const handleDelete = async () => {
    try {
      await axios.delete(
        `process.env.REACT_APP_API_URL/listings/listing/${listingId}`,
        { withCredentials: true }
      )
    } catch (err) {
      console.log(err)
    }
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <>
      <div>
        <div style={{ padding: "60px 0", textAlign: "center" }}>
          <h1>{listing.title}</h1>
        </div>
        <div className={styles.singleListingTP}>
          <div className={styles.singleListingTitle}>
            <h2>{listing.title}</h2>
          </div>

          <div className={styles.singleListingPrice}>
            <h2>{listing.price}</h2>
          </div>
        </div>
        <hr style={{ margin: "30px 0" }} />
        <div className={styles.singleListingContainer}>
          <div className={styles.singleListingLeft}>
            <div className={styles.image1Container} key={listing.id}>
              <img
                alt=""
                className={styles.listingsImage}
                src="../../img/bg/bg1.jpg"
                width="400%"
                height="250%"
              />
            </div>
            <div className={styles.singleListingDescription}>
              <h3>Description</h3>
              <div className={styles.houseAmenities}>
                <div className={styles.beds}>
                  <p>icon</p>
                  <div>
                    <p>Beds</p>
                    <p>4 beds</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <p>icon</p>
                  <div>
                    <p>Area</p>
                    <p>4 sqft</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <p>icon</p>
                  <div>
                    <p>Baths</p>
                    <p>4 Bathrooms</p>
                  </div>
                </div>
              </div>
              <p>{listing.desc}</p>

              {currentUser.username === listing.username && (
                <div className="edit">
                  <Link href={`/add-listing?edit=1`} state={listing}>
                    {/* <img src={Edit} alt="" /> */}
                    Edit
                  </Link>

                  <p onClick={handleDelete}>Delete</p>

                  {/* <img onClick={handleDelete} src={Delete} alt="" /> */}
                </div>
              )}
            </div>
            <div className={styles.singleListingLocation}>
              <h3>Location</h3>
              <div className={styles.houseAmenities}>
                <div className={styles.beds}>
                  <p>icon</p>
                  <div>
                    <p>Beds</p>
                    <p>4 beds</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <p>icon</p>
                  <div>
                    <p>Area</p>
                    <p>4 sqft</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <p>icon</p>
                  <div>
                    <p>Baths</p>
                    <p>4 Bathrooms</p>
                  </div>
                </div>
              </div>
              <p>{listing.desc}</p>
              {currentUser.username === listing.username && (
                <div className="edit">
                  <Link href={`/listings?listing=2`} state={listing}>
                    {/* <img src={Edit} alt="" /> */}
                    Edit
                  </Link>
                  {/* <img onClick={handleDelete} src={Delete} alt="" /> */}
                </div>
              )}
            </div>
            <div className={styles.singleListingVideo}>
              <h3>Location</h3>
              <div className={styles.houseAmenities}>
                <div className={styles.beds}>
                  <p>icon</p>
                  <div>
                    <p>Beds</p>
                    <p>4 beds</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <p>icon</p>
                  <div>
                    <p>Area</p>
                    <p>4 sqft</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <p>icon</p>
                  <div>
                    <p>Baths</p>
                    <p>4 Bathrooms</p>
                  </div>
                </div>
              </div>
              <p>{listing.desc}</p>
              {currentUser.username === listing.username && (
                <div className="edit">
                  <Link href={`/write?listing=2`} state={listing}>
                    {/* <img src={Edit} alt="" /> */}
                    Edit
                  </Link>
                  {/* <img onClick={handleDelete} src={Delete} alt="" /> */}
                </div>
              )}
            </div>
          </div>
          <div className={styles.singleListingRight}>2</div>
        </div>
      </div>

      <p>Posted {moment(listing.date).fromNow()}</p>
    </>
  )
}
Listing.getLayout = (page) => <Layout2>{page}</Layout2>

export default Listing
