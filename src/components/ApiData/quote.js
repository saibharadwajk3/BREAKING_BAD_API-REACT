import React from "react"

const quote = ({ item }) => {
  return (
    <figure key={item.id}>
      <blockquote className="quotes card-body">
        <p>{item.quote}</p>
      </blockquote>
      <figcaption>
        ~{item.author} <cite>Brave New World</cite>
      </figcaption>
    </figure>
  )
}

export default quote
