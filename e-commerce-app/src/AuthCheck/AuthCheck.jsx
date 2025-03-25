import { Navigate, useLocation } from "react-router";


const AuthCheck = ({children}) => {
    const isAuthentication = true;
    const location = useLocation();                                                                               

    if(!isAuthentication){
        return <Navigate to='/auth/login' state={{from: location.pathname}}/>
    }

    return children;

};

export default AuthCheck;