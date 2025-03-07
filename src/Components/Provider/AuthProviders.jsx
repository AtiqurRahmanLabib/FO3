import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const  logout = () => {
        return SignOut(auth)
            
    };

    const authInfo = { user, createUser, SignIn, logout };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            console.log('observing user by useEffect inside the auth provider', currentuser)
        })
        return unSubscribe;
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
};