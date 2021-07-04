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
      <h3 className="Error">
        Network Error..!Make sure you are connected to internet
      </h3>
    )
  } else if (items.length === 0 && isLoading === false) {
    return <h3 className="Error">Sorry😞..No matching item found</h3>
  } else {
    return (
      <>
        <Pagination items={items} isLoading={isLoading} />
      </>
    )
  }
}

export default Home
