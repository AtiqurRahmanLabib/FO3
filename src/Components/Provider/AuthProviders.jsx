import PropTypes from 'prop-types';
import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const authInfo = {
        username: 'Atiqur Rahman Labib',
        password: '123456'
    }

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
