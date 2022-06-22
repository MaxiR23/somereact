import { useEffect, useState } from "react"

const array = [{
    id: '1',
    name: 'smartphone',
    price: 150
}]

export default function TestFetchContainer() {

    const [testArray, setTestArray] = useState({})

    useEffect(() => {
        fetch(array)
        .then(response => response.json())
        .then(data => setTestArray(data))
        .catch(err => console.warn(err))
    }, []);
    
    return (
        <>
        {testArray && <p> {testArray.name} </p>}
        </>
    )
}