import React, { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"

const useAxios = (url: string) => {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<any>()

  const fetchData = async (url: string) => {
    try {
      const response: any = await axios.get(url) // Send a GET request to the specified URL and await the response
      setData(response.data) // Set the fetched data in the state or variable for further use
      setError(null) // Clear any previous error
    } catch (error) {
      setData(null) // Clear the data if an error occurs
      setError(error) // Set the error object to indicate the encountered error
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])
  return { data, error }
}

export default useAxios
