import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import ReactPaginate from "react-paginate"
import ReactWhatsapp from "react-whatsapp"
import Link from "next/link"

import Layout2 from "../components/Layouts/Layout2"
import ListingCard from "../components/Listings/ListingCard"
import styles from "../styles/ListingsPage.module.css"

console.log("Version: ", process.env.NEXT_PUBLIC_ENV)
const Listings = () => {
  const [listings, setListings] = useState([])
  const [inquirePhone, setInquirePhone] = useState("")
  const [inquireMessage, setInquireMessage] = useState("")
  // const cat = useRouter()
  const cat = useRouter().asPath.replace("/listings", "")

  // console.log(cat)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_ENV}/listings/listings${cat}`
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

  const listingsPerPage = 10
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
        <div
          className={styles.paginateContainerClass}
          style={{ margin: "60px auto", width: "20%" }}
        >
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
