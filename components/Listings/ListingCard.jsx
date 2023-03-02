import axios from "axios"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import EllipsisText from "react-ellipsis-text"
import ReactPaginate from "react-paginate"
import styles from "../../styles/ListingsPage.module.css"
const ListingCard = ({ listingsPerPage, pagesVisited, getText, listings }) => {
  return (
    <>
      <div className={styles.listingsLeftContainer}>
        {listings
          .slice(pagesVisited, pagesVisited + listingsPerPage)
          .map((listing) => (
            <div className={styles.listingsCard} key={listing.id}>
              <div className={styles.image1Container} key={listing.id}>
                <img
                  alt=""
                  className={styles.listingsImage}
                  src={`../../upload/${JSON.parse(listing.img)[0]}`}
                  width="400%"
                  height="250%"
                />
              </div>
              <div className={styles.listingsTP}>
                <Link className="listingLink" href={`/listing/${listing.id}`}>
                  <h1 className="listingTitle">{listing.title}</h1>
                </Link>
                <h3 className="listingPrice">from $ {listing.price}</h3>
                <p>
                  <EllipsisText text={getText(listing.desc)} length={"100"} />
                </p>
              </div>

              <hr />
              <div className={styles.listingsRoomProperties}>
                <h5>Bedrooms</h5>
                <p style={{ fontWeight: "500" }}>{listing.bedrooms}</p>
              </div>
              <hr />
              <div className={styles.listingsRoomProperties}>
                <h5>Bathrooms: </h5>
                <p style={{ fontWeight: "500" }}>{listing.bathrooms}</p>
              </div>
              <hr />
              <div className={styles.listingsRoomProperties}>
                <h5>Sqft</h5>
                <p style={{ fontWeight: "500" }}>3</p>
              </div>

              <hr />
            </div>
          ))}
      </div>
    </>
  )
}

export default ListingCard
