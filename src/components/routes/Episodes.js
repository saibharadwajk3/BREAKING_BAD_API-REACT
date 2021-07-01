import React, { useState, useEffect } from "react";
import EPisodes from "../cast/Episodes";
import axios from "axios";
import Pagination from "../ui/Pagination";
const Episodes = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/episodes`);
      //console.log(result.data)
      setItems(result.data);
      setIsLoading(false);
    };
    getItems();
  }, []);

  return (
    <>
      {/* <EPisodes items={items} isLoading={isLoading} />; */}
      <Pagination items={items} isLoading={isLoading} />;
    </>
  );
};

export default Episodes;
