import React from "react";

const death = ({ item }) => {
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
  );
};

export default death;
