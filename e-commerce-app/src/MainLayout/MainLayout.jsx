import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../Pages/Home/Home';
import Auth from '../Pages/Auth/Auth';
import Login from '../Pages/Auth/Login/Login';
import Register from '../Pages/Auth/Register/Register';
import Error from '../Pages/Error/Error';
import AuthCheck from '../AuthCheck/AuthCheck';

const MainLayout = () => {
    return (
       <BrowserRouter>
       {/* navigation bar */}
       <NavBar/>
       <Routes>
            <Route path='/' element={
                 <AuthCheck>
                    <Home/>
                </AuthCheck>
            }
            />
            <Route path='auth' element={<Auth/>}>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
            </Route>

            {/* not found route */}
            <Route path='*' element={<Error/>}/>
       </Routes>
       </BrowserRouter>
    );
};

export default MainLayout;