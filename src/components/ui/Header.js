import React from "react"
import Search from "./Search"

import logo from "../../assets/logo.png"

const header = ({ getQuery }) => {
  return (
    <header className="center">
      <div className="logo">
        <img src={logo} alt="Loading..." />
      </div>
      <Search getQuery={getQuery} />
    </header>
  )
}

export default header
