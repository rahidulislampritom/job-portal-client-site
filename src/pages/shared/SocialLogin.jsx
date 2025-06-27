import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../../context/authContext/AuthContext";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    return (
        <div>
            <button onClick={() => googleSignIn()} className="btn btn-ghost md:text-lg"><FaGoogle className="text-blue-600" /> Sign up with Google</button>
            <p className="divider">Or continue with</p>
        </div>
    );
};

export default SocialLogin;