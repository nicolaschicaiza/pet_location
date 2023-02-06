import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";
import Profile from "../Profile";

const Home = () => {
    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(isAuthenticated);

    return (
        <div>
            <p>{isAuthenticated}</p>
            {isAuthenticated ?
                <Profile />
             :
                <LoginButton />
            }
        </div>
    );
};

export default Home;
