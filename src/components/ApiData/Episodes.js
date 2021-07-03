import React from "react"
import Loader from "../ui/Loader"
import Episode from "./episode"
const Episodes = ({ items, isLoading }) => {
  if (isLoading) {
    return <Loader />
  } else {
    return (
      <section className="cards">
        {items.map((item) => {
          return <Episode key={item.episode_id} item={item} />
        })}
      </section>
    )
  }
}

export default Episodes
