import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import ReactPaginate from "react-paginate"
import Link from "next/link"

import Layout2 from "../components/Layouts/Layout2"
import ListingCard from "../components/Listings/ListingCard"
import styles from "../styles/ListingsPage.module.css"

const Listings = () => {
  const [listings, setListings] = useState([])

  // const cat = useRouter()
  const cat = useRouter().asPath.replace("/listings", "")

  // console.log(cat)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `process.env.REACT_APP_API_URL/listings/listings${cat}`
        )
        // console.log(res)
        setListings(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  const [pageNumber, setPageNumber] = useState(0)

  const listingsPerPage = 2
  const pagesVisited = pageNumber * listingsPerPage

  const pageCount = Math.ceil(listings.length / listingsPerPage)
  const breakLabel = 2
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <>
      <div>
        <div style={{ padding: "60px 0", textAlign: "center" }}>
          <h1>OUR LISTINGS</h1>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              margin: "0 60px",
              width: "100%",
            }}
          >
            <ListingCard
              listings={listings}
              getText={getText}
              pagesVisited={pagesVisited}
              listingsPerPage={listingsPerPage}
            />
            <div className={styles.listingsRightContainer}>
              <div className={styles.listingsSearchCard}>
                <h2>Search By Category</h2>
              </div>
              <div className={styles.listingsEnquireCard}>
                <h2>Inquire Now</h2>
                <form>
                  <div>
                    <label>Name</label>
                    <input type="text" name="name" />
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                  </div>
                  <div>
                    <label>Message</label>
                    <input type="text" name="message" />
                  </div>
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </>
  )
}

Listings.getLayout = (page) => <Layout2>{page}</Layout2>

export default Listings
