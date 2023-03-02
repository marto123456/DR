import React, { useState, useEffect } from "react"
import Image from "next/image"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/ListingCard.module.css"

const ListingCard2 = () => {
  const [listings, setListings] = useState([])

  // const cat = useRouter()
  const cat = useRouter().asPath

  console.log(cat)

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

  return (
    <>
      <div className={styles.cardContainer}>
        {listings.map(
          (listing) =>
            listing.cat == "homes" && (
              <Link href={`listing/${listing.id}`} key={listing.id}>
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      alt=""
                      className={styles.image}
                      src={`/upload/${JSON.parse(listing.img)[0]}`}
                      width="700%"
                      height="600%"
                    />
                  </div>
                  <div className={styles.headParaContainer}>
                    <h1>{listing.title}</h1>
                    <h3>from $ {listing.price}</h3>
                    <h4>{listing.desc}</h4>
                  </div>
                  <div className={styles.cardPropContainer}>
                    <div className={styles.roomProperties}>
                      <p>bathrooms:</p>
                      <p style={{ fontWeight: "bold", color: "black" }}>
                        {listing.bathrooms}
                      </p>
                    </div>
                    <div className={styles.roomProperties}>
                      <p style={{ font: "bold", color: "black" }}>Bed:</p>
                      <p style={{ fontWeight: "bold", color: "black" }}>
                        {listing.bedrooms}
                      </p>
                    </div>
                    <div className={styles.roomProperties}>
                      <p>Sqft:</p>
                      <p style={{ fontWeightWeight: "bold", color: "black" }}>
                        {listing.area}
                      </p>
                    </div>
                  </div>
                  {/* <hr /> */}
                </div>
              </Link>
            )
        )}
      </div>
    </>
  )
}

export default ListingCard2
