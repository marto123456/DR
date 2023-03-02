// import React from "react"
// import Layout from "../components/Layouts/Layout"

// import Layout2 from "../components/Layouts/Layout2"

// const addlisting = () => {
//   return (
//     <>
//       <div>add lising1</div>
//       <div>add listing2</div>
//     </>
//   )
// }

// addlisting.layout = Layout2

// export default addlisting

import React from "react"
import { useState, useContext } from "react"
import { useLocation } from "react-router-dom"

import Layout from "../components/Layouts/Layout"
import Link from "next/link"
import Layout2 from "../components/Layouts/Layout2"
import ListingForm from "../components/ListingForm/ListingForm"
import { AuthContext } from "../context/authContext"

const addlisting = () => {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  if (!currentUser.username) {
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
        <h2>You cannot view this page. Please login to proceed</h2>
        <Link href="login">
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
            LOGIN
          </button>
        </Link>
      </div>
    )
    Router.push("/")
  }
  return (
    <>
      <ListingForm />
    </>
  )
}

addlisting.getLayout = (page) => <Layout2>{page}</Layout2>

export default addlisting
