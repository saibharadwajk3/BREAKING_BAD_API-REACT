import useFetch from "../../useFetch"
import Pagination from "../ui/Pagination"
import { useEffect } from "react"
const Deaths = ({ SearchQuery, newPath, setDeathQuery }) => {
  useEffect(() => {
    setDeathQuery("")
  }, [newPath])
  const url =
    SearchQuery === ""
      ? `https://www.breakingbadapi.com/api/deaths`
      : `https://www.breakingbadapi.com/api/death-count?name=${SearchQuery}`
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

export default Deaths
