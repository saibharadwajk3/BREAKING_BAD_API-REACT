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

export default Quotes
