import axios from "axios"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import Layout3 from "../components/Layouts/Layout3"
import styles from "../styles/Login.module.css"

function Register() {
  const router = useRouter()
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [err, setError] = useState(null)

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`process.env.REACT_APP_API_URL/auth/register`, input)
      console.log("login")
      router.push("/login")
    } catch (err) {
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
            <p>Find Apartments in Abuja. You should sign up</p>
            <h1>Welcome !</h1>
          </div>
        </div>
        <div className={styles.loginRightContainer}>
          <div className={styles.loginRight}>
            <h1>Register</h1>
            <div>
              <form className={styles.loginForm}>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@domain.com"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder=""
                    onChange={handleChange}
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
                <button onClick={handleSubmit}>Register</button>
                <p>
                  Already have an account ? <Link href="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Register.getLayout = (page) => <Layout3>{page}</Layout3>

export default Register
