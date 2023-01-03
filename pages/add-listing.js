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

import { useLocation } from "react-router-dom"

import Layout from "../components/Layouts/Layout"

import Layout2 from "../components/Layouts/Layout2"
import ListingForm from "../components/ListingForm/ListingForm"

const addlisting = () => {
  return (
    <>
      <ListingForm />
    </>
  )
}

addlisting.getLayout = (page) => <Layout2>{page}</Layout2>

export default addlisting
