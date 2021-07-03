import CustomFetch from "../../useFetch"
import Pagination from "../ui/Pagination"
const Episodes = ({ SearchQuery }) => {
  const url = `https://www.breakingbadapi.com/api/episodes/${SearchQuery}`
  const { items, isLoading, error } = CustomFetch(url)

  if (error === "Server Error") {
    return <h3 className="Error">Server Error ..Something wrong on our side</h3>
  } else if (
    (items.length === 0 && isLoading === false) ||
    error === "Network Error"
  ) {
    return <h3 className="Error">Sorry😞..No matching item found</h3>
  } else {
    return (
      <>
        <Pagination items={items} isLoading={isLoading} />
      </>
    )
  }
}

export default Episodes
