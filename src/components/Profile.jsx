import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import { DataDisplay } from "./DataDisplay";
//import { Buzzer } from "./Buzzer";
import { Nav } from "./Nav/Nav";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>

                    {/* <pre>{JSON.stringify(user)}</pre> */}
                    
                </div>
            </div>
        )
    );
};

export default Profile;
