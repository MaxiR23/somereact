import React from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'

export default function ProtectedRoute({children}) {

    const {user, loading} = React.useContext(AuthContext);
    if (loading) return <h1> Loasing </h1>
    /* si no existe el objeto user, es decir, el usuario no esta autentificado*/
    if (!user) return <Navigate to={'/login'}/>

    return <> {children} </>
}
