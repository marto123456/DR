import React, { useContext, useEffect, useState } from "react"
import Layout3 from "../components/Layouts/Layout3"
import { AuthContext } from "../context/authContext"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Login.module.css"
import { useRouter } from "next/router"

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  const [err, setError] = useState(null)
  const { login } = useContext(AuthContext)
  const router = useRouter()
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      router.push("/add-listing")
    } catch (err) {
      console.log(err)
      setError(err.response.data)
    }
  }

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginLeftContainer}>
          <div className={styles.loginLeft}>
            <Link href="/">
              <Image
                height="50"
                width="70"
                src="/img/logo.png"
                style={{ cursor: "pointer" }}
              />
            </Link>

            <h2>Discovereality</h2>
            <h1>Welcome Back</h1>
            <p>
              Find Apartments in Abuja. Sign Into your client area for
              personalized experience
            </p>
          </div>
        </div>
        <div className={styles.loginRightContainer}>
          <div className={styles.loginRight}>
            <h1>Sign Into Your Dashboard</h1>
            <div>
              <form className={styles.loginForm}>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="example@domain.com"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                {/* <div className={styles.checkbox}>
                  <input type="checkbox" value="" />
                  <label htmlFor="Save my preferene">Save my preferene</label>
                </div> */}
                <button type="button" onClick={handleSubmit}>
                  Sign In
                </button>
                {err && <p>{err}</p>}
                <p>
                  Don't have an account ? <Link href="/register">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Login.getLayout = (page) => <Layout3>{page}</Layout3>

export default Login
