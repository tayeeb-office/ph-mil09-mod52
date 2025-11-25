import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(); 

const googleProvider = new GoogleAuthProvider();


const Provider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    const register = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const google = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    useEffect( () => {
        const unsubscibe = onAuthStateChanged (auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return() =>{
            unsubscibe();
        }
    },[])

    const authData = {
        register,
        user, 
        setUser,
        google
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default Provider;