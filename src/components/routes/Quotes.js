import React, { useState, useEffect } from "react";
import QUotes from "../cast/Quotes";
import axios from "axios";
import Pagination from "../ui/Pagination";

const Quotes = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/quotes`);

      setItems(result.data);
      setIsLoading(false);
    };
    getItems();
  }, []);

  return (
    <>
      {/* <QUotes items={items} isLoading={isLoading} /> */}
      <Pagination items={items} isLoading={isLoading} />;
    </>
  );
};

export default Quotes;
