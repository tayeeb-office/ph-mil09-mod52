import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../Firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(); 


const Provider = ({children}) => {
    
    const register = (email, pass) =>{
        console.log(email, pass);
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const authData = {
        register
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default Provider;