import React from "react";
import Search from "./Search";

import logo from "../../assets/logo.png";

const header = () => {
  return (
    <header className="center">
      <img src={logo} alt="Loading..." />
      {/* <Search /> */}
    </header>
  );
};

export default header;
// getQuery={(query) => setQuery(query)}
