import React from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TestFirebase() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const db = getFirestore()

        const itemRef = collection(db, 'items');
        getDocs(itemRef).then((snapshot) => {
            setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
    }, [])

    console.log(product)

    return (
        <>
            {JSON.stringify(product)}
        </>
    )
}
