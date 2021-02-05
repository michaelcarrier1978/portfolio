/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Navbar from "./navBar"
import Footer from "./footer"


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
