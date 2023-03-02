import axios from "axios"
import Router from "next/router"
import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const initialState = []

  const [currentUser, setCurrentUser] = useState(initialState)

  const login = async (inputs) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ENV}/auth/login`,
      inputs,
      { withCredentials: true }
    )
    setCurrentUser(res.data)
  }
  const logout = async (inputs) => {
    await axios.post(`${process.env.NEXT_PUBLIC_ENV}/auth/logout`)
    setCurrentUser(null)
    Router.push("/")
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"))
    if (userData) {
      setCurrentUser(userData)
    }
  }, [])

  useEffect(() => {
    if (currentUser !== initialState) {
      localStorage.setItem("user", JSON.stringify(currentUser))
    }
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
