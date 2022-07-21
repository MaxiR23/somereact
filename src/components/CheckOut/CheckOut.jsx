import React, { useState } from 'react'
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';

export default function CheckOut() {

  const {user} = React.useContext(AuthContext);

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("")

  const sendOrder = () => {
    const order = {
      buyer: { name, tel, email },
      items: [{ name: 'Bici', price: 350 }],
      total: 350
    };

    /* si no tengo nombre o tel o email, el return corta la funcion y no se ejecuta lo de abajo */
    if (!name || !tel || !email) return;

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
      .then(({ id }) => { setOrderId(id) })
  }

  return (
    <div>
      <p> Id: {orderId} </p>
      <input onChange={(e) => setName(e.target.value)} type={'text'} placeholder={'ingrese nombre'} />
      <input defaultValue={user.email} type={'email'} placeholder={'ingrese e-mail'} />
      <input onChange={(e) => setTel(e.target.value)} type={'tel'} placeholder={'ingrese tel'} />
      <button onClick={sendOrder}> Comprar </button>
    </div>
  )
}
