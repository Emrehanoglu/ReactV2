import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        /* promise yöntemi */
        /* fetch(url).then(res => res.json()).then(data => setData(data)) */

        /* async - await yöntemi */
        const fetchData = async () => {
            const res = await fetch(url)
            const data = res.json()
            setData(data)
        }

        fetchData()

    },[url])

    return {data}
}

export default useFetch