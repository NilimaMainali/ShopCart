import React, { useEffect,useState } from 'react'
import {createContext} from "react"
import app from "../firebase/firebase.config"
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { GoogleAuthProvider } from 'firebase/auth/web-extension';


export  const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);
    const[loading, setLoading] =useState(true);

    // create user
    const createUser =(email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // create user using gmail
    const signUpWithGmail = () => {

        setLoading(true);
        return signInWithPopup(auth,  googleProvider )
    }
    // login
    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    // logout function
    const logOut =() =>{

        return signOut(auth)
    }
    // user is available or not
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            setUser(currentuser)
            setLoading(false);

        });
        return () =>{
            return unsubscribe()
        }
    })

    const authInfo ={
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logOut

    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}

    </AuthContext.Provider>
   
  )
}

export default AuthProvider
