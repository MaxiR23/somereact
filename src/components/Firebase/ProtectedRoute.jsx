import { CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'

export default function ProtectedRoute({children}) {

    const {user, loading} = React.useContext(AuthContext);
    if (loading) return  <Container sx={{display:'flex', justifyContent:'center', align:'center', height:'100vh'}}> <CircularProgress/> </Container> 
    /* si no existe el objeto user, es decir, el usuario no esta autentificado*/
    if (!user) return <Navigate to={'/login'}/>

    return <> {children} </>
}
