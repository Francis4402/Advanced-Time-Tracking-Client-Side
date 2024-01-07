
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../Hooks/useAuth.jsx";
const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg min-h-screen"></span>
        </div>
    }

    if(user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace />
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;