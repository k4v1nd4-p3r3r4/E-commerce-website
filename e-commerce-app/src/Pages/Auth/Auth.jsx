import React from 'react';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div>
            Auth Page
            <Outlet/>
        </div>
    );
};

export default Auth;