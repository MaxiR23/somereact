import { useEffect } from "react"

export default function TestFetchContainer() {
    useEffect(() => {
        fetch('./data/jsonTest.json')
            .then(response => {
               console.log(response.status)
                return response.json()
            })
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        </>
    )
}