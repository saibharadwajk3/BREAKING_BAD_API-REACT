import React from "react"
import Loader from "../ui/Loader"
import Quote from "./quote"

const Quotes = ({ items, isLoading }) => {
  if (isLoading) {
    return <Loader />
  } else {
    return (
      <section className="cards">
        {items.map((item) => {
          return <Quote key={item.id} item={item} />
        })}
      </section>
    )
  }
}

export default Quotes
