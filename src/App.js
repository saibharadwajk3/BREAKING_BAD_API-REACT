import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
//components
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
// import Characters from "./components/cast/Characters";
import Pagination from "./components/ui/Pagination";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      //console.log(result.data)
      setItems(result.data);
      setIsLoading(false);
    };
    getItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <Pagination items={items} isLoading={isLoading} />
      {/* <Characters items={currentItems} isLoading={isLoading} /> */}
    </div>
  );
}

export default App;
