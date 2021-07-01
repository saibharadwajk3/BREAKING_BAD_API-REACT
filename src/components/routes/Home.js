import React, { useState, useEffect } from "react";
import Characters from "../cast/Characters";
import axios from "axios";
import Pagination from "../ui/Pagination";
const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    getItems();
  }, []);

  return (
    <>
      {/* <Characters items={items} isLoading={isLoading} />; */}
      <Pagination items={items} isLoading={isLoading} />;
    </>
  );
};

export default Home;
