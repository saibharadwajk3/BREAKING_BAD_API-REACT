import React from "react"
import Loader from "../ui/Loader"
import Death from "./death"

const Deaths = ({ items, isLoading }) => {
  if (isLoading) {
    return <Loader />
  } else {
    return (
      <section className="cards">
        {items.map((item) => {
          return <Death key={item.id} item={item} />
        })}
      </section>
    )
  }
}

export default Deaths
