import { createContext } from "react";
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './../index';
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const resetPassword = email => sendPasswordResetEmail(auth, email);

    const updateUserDetail = (displayName) => updateProfile(auth.currentUser, { displayName: displayName, photoURL: "" })

    /* const emailVerification = () => sendEmailVerification(auth.currentUser).then(() => alert('send')).catch(e => alert(e.message)) */

    const loginWithGoogle = () => {
        /* instanciamos la clase de GoogleProvider */
        const googleProvider = new GoogleAuthProvider();
        /* nos debe devolver alguna respuesta */
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const authSuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });

        return authSuscribe;

    }, [])

    return (
        <AuthContext.Provider value={{
            loading,
            login,
            loginWithGoogle,
            logout,
            resetPassword,
            signUp,
            user,
            updateUserDetail
        }}>
            {children}
        </AuthContext.Provider>
    )
}

