import React from "react"
import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"
import ReactPaginate from "react-paginate"
import { AuthContext } from "../context/authContext"
import Layout2 from "../components/Layouts/Layout2"
import Service from "../components/Service"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import {
  faChat,
  faHeart,
  faTelephone,
} from "@fortawesome/free-regular-svg-icons"
import styles from "../styles/Dashboard.module.css"

import FrontEndAdmin from "../components/Layouts/FrontEndAdmin"

const MyProperties = () => {
  const [listings, setListings] = useState([])

  // const cat = useRouter()
  const router = useRouter()
  const cat = useRouter().asPath.replace("/my-properties", "")
  // const listingId = useRouter().asPath.split("/")[2]
  // console.log(listingId)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${process.env.NEXT_PUBLIC_ENV}/listings/listing/${listingId}`
  //       )
  //       // console.log(res)
  //       setListing(res.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchData()
  // }, [listingId])
  // console.log(cat)
  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser.username)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_ENV}/listings/listings`
        )
        // console.log(res)
        setListings(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])
  const handleDelete = async (listingId) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_ENV}/listings/listing/${listingId}`,
        { withCredentials: true }
      )
      router.push("my-properties")
    } catch (err) {
      console.log(err)
    }
  }
  const [pageNumber, setPageNumber] = useState(0)

  const listingsPerPage = 10
  const pagesVisited = pageNumber * listingsPerPage

  const pageCount = Math.ceil(listings.length / listingsPerPage)
  const breakLabel = 2
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <>
      <FrontEndAdmin>
        {listings.slice(pagesVisited, pagesVisited + listingsPerPage).map(
          (listing) =>
            currentUser.id === listing.uid && (
              <div className={styles.dashboardListingCard}>
                <img
                  src={`/upload/${JSON.parse(listing.img)[0]}`}
                  style={{ width: "30%" }}
                />
                <div className={styles.dashboardListingItem}>
                  <h2>{listing.title}</h2>
                  <p>Bedroom : {listing.bedrooms}</p>
                </div>
                <div className={styles.dashboardOptions}>
                  <Link href={`listing/edit/${listing.id}`} state={listing}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ cursor: "pointer", fontSize: 25, color: "blue" }}
                    />
                  </Link>
                  |&nbsp;{" "}
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      onClick={() => handleDelete(listing.id)}
                      style={{ cursor: "pointer", fontSize: 20, color: "red" }}
                    />
                  </p>
                </div>
              </div>
            )
        )}
      </FrontEndAdmin>
      <div style={{ margin: "60px auto", width: "50%" }}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          // breakLabel={"..."}
          breakClassName={styles.breakMe}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          previousLinkClassName={styles.previousBttn}
          nextLinkClassName={styles.nextBttn}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </div>
    </>
  )
}

MyProperties.getLayout = (page) => <Layout2>{page}</Layout2>

export default MyProperties
