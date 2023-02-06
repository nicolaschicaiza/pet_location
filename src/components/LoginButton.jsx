import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import "bootstrap/dist/css/bootstrap.min.css";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="d-flex justify-content-center align-items-center">
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => loginWithRedirect()}
            >
                Login
            </button>
        </div>
    );
};

export default LoginButton;