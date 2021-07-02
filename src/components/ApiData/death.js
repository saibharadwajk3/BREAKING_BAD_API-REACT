import React from "react"

const death = ({ item }) => {
  if (item.name === undefined) {
    return (
      <div key={item.id} class="card-deck">
        <div class="card deaths">
          <div class="card-body text-center">
            <h1>
              <strong>Death Of:</strong> {item.death}
            </h1>

            <p>
              <strong>Cause:</strong> {item.cause}
            </p>

            <p>
              <strong>Responsible:</strong> {item.responsible}
            </p>
            <p>
              <strong>Last Words:</strong> {item.last_words}
            </p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div key={item.id} class="card-deck">
        <div class="card deaths">
          <div class="card-body text-center">
            <h1>
              <strong>Name:</strong> {item.name}
            </h1>

            <h1>
              <strong>DeathCount:</strong> {item.deathCount}
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default death
