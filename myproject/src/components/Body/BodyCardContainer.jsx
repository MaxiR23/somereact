import { useEffect, useState } from "react";
import BodyCard from './BodyCard';

const BodyCardContainer = () => {
    
    const [initial, setCount] = useState(1);
    const stock = 5; 
    const [disabled, setDisabled] = useState(false);
    const [disabled1, setDisabled1] = useState(false);

    function decrement() {
        setCount(initial - 1);
    }

    function increment() {
        setCount(initial + 1);
    }

    useEffect(() => {
        if (initial === stock) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
        
        if (initial <=   1) {
            setDisabled1(true);
        } else {
            setDisabled1(false);
        }
    }, [initial]);

    return <BodyCard initial={initial} disabled={disabled} disabled1={disabled1} increment={increment} decrement={decrement} ></BodyCard>
}

export default BodyCardContainer;