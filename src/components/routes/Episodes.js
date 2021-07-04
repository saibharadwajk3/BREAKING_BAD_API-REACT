import CustomFetch from "../../useFetch"
import Pagination from "../ui/Pagination"
import { useEffect } from "react"

const Episodes = ({ SearchQuery, newPath, setEpisodeQuery }) => {
  useEffect(() => {
    setEpisodeQuery("")
  }, [newPath])
  const url = `https://www.breakingbadapi.com/api/episodes/${SearchQuery}`
  const { items, isLoading, error } = CustomFetch(url)

  if (error === "Server Error") {
    return <h3 className="Error">Server Error ..</h3>
  } else if (
    (items.length === 0 && isLoading === false) ||
    error === "Network Error"
  ) {
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

export default Episodes
