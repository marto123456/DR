import React, { useContext } from "react"
import { useEffect, useState } from "react"
import Router, { useRouter } from "next/router"
import axios from "axios"
import Link from "next/link"
import moment from "moment/moment"
import Image from "next/image"
import ReactWhatsapp from "react-whatsapp"
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

  const [inquirePhone, setInquirePhone] = useState("")
  const [inquireMessage, setInquireMessage] = useState("")

  const [index, setIndex] = useState(0)

  const stringImages = listing.img
  let images
  if (typeof stringImages !== "undefined") {
    images = JSON.parse(stringImages)
  }
  // console.log(images)
  // const arrayImages = Array.from(stringImages)

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }
  const location = useRouter()
  const listingId = location.asPath.split("/")[2]
  console.log(listing)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_ENV}/listings/listing/${listingId}`
        )

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
        `${process.env.NEXT_PUBLIC_ENV}/listings/listing/${listingId}`,
        { withCredentials: true }
      )
      location.push("/listings")
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
            <div
              className={styles.arrowContainer}
              style={{ left: "5%" }}
              onClick={() => handleArrow("l")}
            >
              <img
                src="/img/arrow1.svg"
                style={{ objectFit: "contain", layout: "fill" }}
              />
            </div>
            <div
              className={styles.wrapper}
              style={{
                transform: `translateX(${-68 * index}vw)`,
                transition: "3s ease-in",
                animation: "fadeIn 5s",
              }}
            >
              {typeof images !== "undefined" ? (
                <>
                  {images.map((img, i) => (
                    <div className={styles.listingImageContainer} key={i}>
                      <img src={`../../../upload/${img}`} />
                    </div>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
            <div
              className={styles.arrowContainer}
              style={{ right: "5%", color: "white" }}
              onClick={() => handleArrow("r")}
            >
              <img
                src="/img/arrow2.svg"
                style={{ objectFit: "contain", layout: "fill" }}
              />
            </div>

            <div className={styles.singleListingDescription}>
              <h3>Description</h3>
              <div className={styles.houseAmenities}>
                <div className={styles.beds}>
                  <p>
                    <Image src="/img/bed.jpg" height="50px" width="50%" />
                  </p>
                  <div className={styles.bedsDiv}>
                    <p style={{ fontWeight: "bold" }}>Beds</p>
                    <p>{listing.bedrooms} beds</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <p>
                    <Image src="/img/area.jpg" height="50px" width="50%" />
                  </p>
                  <div className={styles.bedsDiv}>
                    <p style={{ fontWeight: "bold" }}>Area</p>
                    <p>{listing.area} sqft</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <p>
                    <Image src="/img/bathroom.jpg" height="50px" width="50%" />
                  </p>
                  <div className={styles.bedsDiv}>
                    <p style={{ fontWeight: "bold" }}>Baths</p>
                    <p>{listing.bathrooms} Bathrooms</p>
                  </div>
                </div>
              </div>
              <p className={styles.houseAmenitiesParagraph}>{listing.desc}</p>

              {currentUser.username === listing.username && (
                <div className={styles.editDelete}>
                  <Link href={`edit/${listingId}`} state={listing}>
                    {/* <img src={Edit} alt="" /> */}
                    <button>Edit</button>
                  </Link>

                  <button
                    style={{ backgroundColor: "purple", color: "white" }}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div className={styles.singleListingLocation}>
              <h3>Location</h3>

              <p>No Location available yet!!</p>
            </div>
            <div className={styles.singleListingVideo}>
              <h3>Other Stats</h3>
              <div className={styles.houseAmenities}>
                <div className={styles.beds}>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Status</p>
                    <p>{listing.stat}</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Amenities</p>
                    <p>4 sqft</p>
                  </div>
                </div>
                <div className={styles.beds}>
                  <div>
                    <p style={{ fontWeight: "bold" }}>User</p>
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
          <div className={styles.singleListingRight}>
            <div className={styles.listingsRightContainer}>
              <div className={styles.listingsSearchCard}>
                <h2>Search By Category</h2>
                <Link className="link" href="/listings?cat=apartments">
                  <button>Apartments</button>
                </Link>
                <Link className="link" href="/listings?cat=hotels">
                  <button>Hotels</button>
                </Link>
                <Link className="link" href="/listings?cat=homes">
                  <button>Homes</button>
                </Link>
                <Link className="link" href="/listings?cat=penthouses">
                  <button>PentHouse</button>
                </Link>
              </div>
              <div className={styles.listingsEnquireCard}>
                <h2>Inquire Now</h2>
                <form>
                  <div>
                    <label>Name</label>
                    <input type="text" name="name" />
                  </div>
                  <div>
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      onChange={(e) => setInquirePhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Message</label>
                    <input
                      type="text"
                      name="message"
                      onChange={(e) => setInquireMessage(e.target.value)}
                    />
                  </div>
                  <ReactWhatsapp number={inquirePhone} message={inquireMessage}>
                    Open Whatsapp
                  </ReactWhatsapp>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p style={{ marginLeft: "30px", marginBottom: "30px" }}>
        Posted {moment(listing.date).fromNow()}
      </p>
    </>
  )
}
Listing.getLayout = (page) => <Layout2>{page}</Layout2>

export default Listing
