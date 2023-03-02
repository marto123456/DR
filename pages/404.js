import Link from "next/link"
import Layout2 from "../components/Layouts/Layout2"

const FourOhFour = () => {
  const pageMeta = {
    title: "Oops! You found a missing page! - Properties Explorers",
    description: "Oh No! It looks like this page is lost in space somewhere!",
  }

  return (
    <Layout2 navtheme="dark" pageMeta={pageMeta}>
      <div style={{ position: "relative" }}>
        <img src="/img/astronaut2.jpg" />
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "40%",
          left: "10%",
        }}
      >
        <div style={{ color: "white" }}>
          <h2>{pageMeta.title}</h2>
          <h1>{pageMeta.description}</h1>
          <button style={{ width: "200px", padding: "10px" }}>
            <Link href="/">Go Back To Earth</Link>
          </button>
        </div>
        <div></div>
      </div>
    </Layout2>
  )
}

export default FourOhFour
