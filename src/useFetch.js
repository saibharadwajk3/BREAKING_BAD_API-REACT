import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (url) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  useEffect(() => {
    const getItems = async () => {
      try {
        const result = await axios(url)

        if (result.status !== 200) {
          setError("Server Error")
        }

        setItems(result.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setError("Network Error")
      }
    }
    getItems()
  }, [url])

  return { items, isLoading, error }
}

export default useFetch
