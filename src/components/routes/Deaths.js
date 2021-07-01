import React, { useState, useEffect } from "react";
import DEaths from "../cast/Deaths";
import Pagination from "../ui/Pagination";

import axios from "axios";
const Deaths = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/deaths`);
      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    getItems();
  }, []);
  // return <h1>hi</h1>;

  return (
    <>
      {/* <DEaths items={items} isLoading={isLoading} />; */}
      <Pagination items={items} isLoading={isLoading} />;
    </>
  );
};

export default Deaths;
