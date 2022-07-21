import {createContext} from "react";
import {createUserWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './../index';
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password) 

    const login  = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    /* const emailVerification = () => sendEmailVerification(auth.currentUser).then(() => alert('send')).catch(e => alert(e.message)) */

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            loading,
            login,
            logout,
            resetPassword,
            signUp,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

