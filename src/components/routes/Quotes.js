import useFetch from "../../useFetch"
import { useEffect } from "react"
import Pagination from "../ui/Pagination"

const Quotes = ({ SearchQuery, newPath, setQuoteQuery }) => {
  useEffect(() => {
    setQuoteQuery("")
  }, [newPath])
  const url =
    SearchQuery === ""
      ? `https://www.breakingbadapi.com/api/quotes`
      : `https://www.breakingbadapi.com/api/quote?author=${SearchQuery}`

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
export default Quotes
