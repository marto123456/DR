// import Layout from "../components/Layouts/Layout"
// import Layout2 from "../components/Layouts/Layout2"
// import "../styles/globals.css"
// import "@fortawesome/fontawesome-svg-core/styles.css" // import Font Awesome CSS
// import { config } from "@fortawesome/fontawesome-svg-core"
// config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// const MyApp = ({ Component, pageProps }) => {
//   const Layout = Component.layout || ((children) => <>{children}</>)
//   return (
//     <Layout>
//       <Component {...pageProps} />)
//     </Layout>
//   )
// }

// export default MyApp

import "../styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css" // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core"
import { AuthContextProvider } from "../context/authContext"
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <AuthContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </AuthContextProvider>
  )
}
export default MyApp
