import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () =>{
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/home");
    }

    if(localStorage.getItem("token")){
        return(
            <nav>
                <button onClick={() => navigate("/dashboard")}>Dashboard</button>
                <button onClick={() => navigate("/buses")}>Buses</button>
                <button>Routes</button>
                <button>Stations</button>
                <button onClick={logout}>Logout</button>
            </nav>
        );
    }
}