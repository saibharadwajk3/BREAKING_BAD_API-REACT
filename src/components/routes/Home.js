import useFetch from "../../useFetch"
import { useEffect } from "react"

import Pagination from "../ui/Pagination"
const Home = ({ SearchQuery, newPath, setCharacterQuery }) => {
  useEffect(() => {
    setCharacterQuery("")
  }, [newPath])
  const url = `https://www.breakingbadapi.com/api/characters?name=${SearchQuery}`

  const { items, isLoading, error } = useFetch(url)

  if (error === "Network Error") {
    return (
      <div className="Error">
        🌪️
        <h4>Network Failed, Please Retry...</h4>
      </div>
    )
  } else if (items.length === 0 && isLoading === false) {
    return (
      <div className="Error">
        🐶
        <h4>No Matches Found</h4>
      </div>
    )
  } else {
    return (
      <>
        <Pagination items={items} isLoading={isLoading} />
      </>
    )
  }
}

export default Home
