import React from "react"
import Character from "./character"

import Loader from "../ui/Loader"

const characters = ({ items, isLoading }) => {
  if (isLoading) {
    return <Loader />
  } else {
    return (
      <section className="cards">
        {items.map((item) => {
          return <Character key={item.char_id} item={item} />
        })}
      </section>
    )
  }
}

export default characters
