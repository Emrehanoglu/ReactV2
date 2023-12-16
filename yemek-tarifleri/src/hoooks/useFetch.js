import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(false) /* loading icon hide */
    const [error, setError] = useState(null)

    useEffect(() => {
        /* promise yöntemi */
        /* fetch(url).then(res => res.json()).then(data => setData(data)) */

        /* async - await yöntemi */
        const fetchData = async () => {
            setisLoading(true) /* loading icon show */
            try{
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const data = await res.json()            
                setTimeout(() => {
                    setisLoading(false) /* loading icon hide */
                    setData(data)
                },1000)
            }
            catch(err){
                setisLoading(false)
                setError('Hata')
                console.log(err.message)
            }
        }

        fetchData()

    },[url])

    return {data, isLoading, error}
}

export default useFetch