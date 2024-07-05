import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () =>{
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/auth/login");
    }

    if(localStorage.getItem("token")){
        return(
            <nav>
                <button onClick={logout}>Logout</button>
            </nav>
        );
    }
}