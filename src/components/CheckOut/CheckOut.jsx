import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

export default function CheckOut() {

  const {user} = React.useContext(AuthContext);
  const {cart, total} = React.useContext(CartContext)

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const userEmail = user.email;

  //crear una pagina para que contenga toda la data de usuario y aqui solamente mostrarla!

  const sendOrder = async () => {
    const order = {
      buyer: {name, tel, userEmail},
      item: cart,
      total: total
    }

    /* si no tengo nombre o tel o email, el return corta la funcion y no se ejecuta lo de abajo */
    if (!name || !tel || !userEmail) return;

    const db = getFirestore();
    const docRef = collection(db, 'orders') 

    try {
      await addDoc(docRef, order).then((id) => console.log(id)) 
    } catch (error) {
      console.warn(error.message)      
    }
  }

  return (
    <>
    <p> {cart.brand} </p>
    <div>
      <input onChange={(e) => setName(e.target.value)} type={'text'} placeholder={'ingrese nombre'} />
      <input defaultValue={userEmail} type={'email'} placeholder={'ingrese e-mail'} />
      <input onChange={(e) => setTel(e.target.value)} type={'tel'} placeholder={'ingrese tel'} />
      <button onClick={sendOrder}> Comprar </button>
    </div>
    </>
  )
}
