import useFetch from "../../useFetch"
import Pagination from "../ui/Pagination"

const Deaths = ({ SearchQuery }) => {
  const url =
    SearchQuery === ""
      ? `https://www.breakingbadapi.com/api/deaths`
      : `https://www.breakingbadapi.com/api/death-count?name=${SearchQuery}`
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

export default Deaths
