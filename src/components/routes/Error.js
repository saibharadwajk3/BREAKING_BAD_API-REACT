import React from "react"
import { Link } from "react-router-dom"
const Error = () => {
  return (
    <div className="Error">
      <h1>404 Page Not Found</h1>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </div>
  )
}

export default Error
