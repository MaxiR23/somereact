import { Container } from "@mui/system";
import { useEffect, useState } from "react"
import StarsIcon from "./StartsIcon";

export default function TestFetchContainer() {
    const [stars, setStar] = useState([]);
    let id = 2;

    useEffect(() => {
        fetch('./data/jsonTest.json')
            .then(response => response.json())
            .then(data => {
                const personId = data.find((person) => person.id === id);
                setStar(personId);
            })
            .catch(err => console.log(err))
    }, [])

    function handleKeyDown(e) {
        if (e.target.value === 'a' | 'e' | 'i' | 'o' | 'u') {
            e.preventDefault();
        } else {
            console.log(e.target.value)
        }
    }

    return (
        <>
        {stars && 
        <Container>
            <StarsIcon stars={stars.id}></StarsIcon>
            {stars.nombre}
            {stars.empresa}
            {stars.trabajo}
        </Container>
        }
        <input type="text" onKeyDown={handleKeyDown} />
        </>
    )
}