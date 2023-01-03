import React from "react"
import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"
import ReactPaginate from "react-paginate"
import { AuthContext } from "../context/authContext"
import Layout2 from "../components/Layouts/Layout2"
import Service from "../components/Service"
import styles from "../styles/Dashboard.module.css"

import FrontEndAdmin from "../components/Layouts/FrontEndAdmin"

const MyProperties = () => {
  const [listings, setListings] = useState([])

  // const cat = useRouter()
  const cat = useRouter().asPath.replace("/my-properties", "")

  // console.log(cat)
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser.username)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `process.env.REACT_APP_API_URL/listings/listings${cat}`
        )
        console.log(res)
        setListings(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])

  const [pageNumber, setPageNumber] = useState(0)

  const listingsPerPage = 3
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
                <img src="img/topbar/email.png" style={{ width: "30%" }} />
                <div className={styles.dashboardListingItem}>
                  <h2>{listing.title}</h2>
                  <p>Bedroom : 3</p>
                </div>
                <div className={styles.dashboardOptions}>
                  <p>Edit</p>|&nbsp; <p>Delete</p>
                </div>
              </div>
            )
        )}
        <div style={{ margin: "60px auto", width: "50%" }}>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
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
      </FrontEndAdmin>
    </>
  )
}

MyProperties.getLayout = (page) => <Layout2>{page}</Layout2>

export default MyProperties
