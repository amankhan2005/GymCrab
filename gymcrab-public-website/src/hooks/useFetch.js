import { useEffect, useState } from "react"

export default function useFetch(fetchFunction) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchFunction()
      .then((res) => setData(res))
      .finally(() => setLoading(false))

  }, [])

  return { data, loading }

}