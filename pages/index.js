// import Head from "next/head"
// import Image from "next/image"
// import Listings from "../components/Listings"
// import Newsletter from "../components/Newsletter"
// import Plan from "../components/Plan"
// import Services from "../components/Services"
// import Map from "../components/Map"
// import Layout from "../components/Layouts/Layout"

// import Layout2 from "../components/Layouts/Layout2"

// import styles from "../styles/Home.module.css"

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Discovereality - Your Dream Apartments in Abuja</title>
//         <meta name="description" content="Generated by me" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Listings />
//       <Services />
//       <Plan />
//       <Newsletter />
//       <Map />
//     </div>
//   )
// }

// Home.layout = Layout

import Head from "next/head"
import Image from "next/image"
import Listings from "../components/Listings"
import Newsletter from "../components/Newsletter"
import Plan from "../components/Plan"
import Services from "../components/Services"
import Map from "../components/Map"
import Layout from "../components/Layouts/Layout"

import Layout2 from "../components/Layouts/Layout2"

import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discovereality - Your Dream Apartments in Abuja</title>
        <meta name="description" content="Generated by me" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Listings />
      <Services />
      <Plan />
      <Newsletter />
      <Map />
    </div>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>
