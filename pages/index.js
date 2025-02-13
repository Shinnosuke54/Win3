import React from "react"
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../components/Home"
import HomeGuest from "../components/HomeGuest"

export default function FrontPage() {
  const [loggedIn, setLoggedIn] = useState()

  return (
    <>
      <Header />
      {loggedIn ? <Home /> : <HomeGuest setLoggedIn={setLoggedIn} />}
      <Footer />
    </>
  )
}
