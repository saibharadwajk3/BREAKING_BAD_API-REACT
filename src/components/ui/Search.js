import React, { useState } from "react"
import { useLocation } from "react-router"
const Search = ({ getQuery }) => {
  const [text, setText] = useState("")
  const onChange = (query) => {
    setText(query)
    getQuery(query)
  }
  const location = useLocation()
  let placeholder = ""
  const path = location.pathname.substring(1)
  switch (path) {
    case "episodes":
      placeholder = "Search Episode_id ex @ 60"
      break
    case "deaths":
      placeholder = "Search ex @Gustavo Fring"
      break
    case "quotes":
      placeholder = "Search ex @Jesse Pinkman"
      break
    default:
      placeholder = "Search ex @Walter White"
  }

  return (
    <section className="search">
      <form action="">
        <input
          type="text"
          //className="form-control"
          placeholder={placeholder}
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  )
}

export default Search
