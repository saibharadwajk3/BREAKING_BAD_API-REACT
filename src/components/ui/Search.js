import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };
  return (
    <section className="search">
      <form action="">
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />

        <i class="fa fa-search"></i>
      </form>
    </section>
  );
};

export default Search;
