import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(false) /* loading icon hide */

    useEffect(() => {
        /* promise yöntemi */
        /* fetch(url).then(res => res.json()).then(data => setData(data)) */

        /* async - await yöntemi */
        const fetchData = async () => {
            setisLoading(true) /* loading icon show */
            const res = await fetch(url)
            const data = await res.json()
            
            setTimeout(() => {
                setisLoading(false) /* loading icon hide */
                setData(data)
            },1000)
        }

        fetchData()

    },[url])

    return {data, isLoading}
}

export default useFetch