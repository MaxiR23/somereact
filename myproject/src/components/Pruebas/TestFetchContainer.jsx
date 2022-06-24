import { useEffect } from "react"

let arrayTest = [
    {
        name: "Maxi",
        lastname: "Rebolo",
        age: 26
    }
]

export default function TestFetchContainer() {
    useEffect(() => {
        fetch(arrayTest)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        </>
    )
}