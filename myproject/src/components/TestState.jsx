import { useState } from "react"

export default function TestState({initial}) {
    const [count, setCount] = useState(initial);
    
    return (
        <>
        <p> {count} </p>
        <button onClick={() => setCount(count + 1)}> </button>
        </>
    )
}