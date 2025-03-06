import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { user, createUser };
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