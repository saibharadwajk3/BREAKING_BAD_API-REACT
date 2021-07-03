import React from "react"
const charactersString = ""
const episode = ({ item }) => {
  return (
    <div className="card-deck">
      <div className="card episodes">
        <div className="card-body text-center">
          <h1>
            <strong>Title:</strong> {item.title}
          </h1>

          <h5>
            <strong>Season:</strong> {item.season}
          </h5>

          <h5>
            <strong>episode:</strong> {item.episode}
          </h5>
          <>
            <h5>
              <strong>Characters:</strong>{" "}
            </h5>

            <p>
              {item.characters.map((character, index) =>
                index === 4
                  ? `${charactersString}${character}`
                  : index < 3 && `${charactersString}${character},`
              )}
            </p>
          </>
        </div>
      </div>
    </div>
  )
}

export default episode
