import React, { useContext } from 'react';
import AuthContext from '../context/authContext/AuthContext';

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;

};

export default useAuth;