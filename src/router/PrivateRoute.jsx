import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../pages/Loader/Loader";



const PrivateRoute = ({ children }) => {

    const location = useLocation();

    // console.log(location.pathname)


    const { user, loader } = useContext(AuthContext)

    if (loader) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }


    return <Navigate to={'/signin'} state={location.pathname}></Navigate>

};

export default PrivateRoute;