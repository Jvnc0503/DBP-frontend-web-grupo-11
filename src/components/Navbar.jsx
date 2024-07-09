import React from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "./Logout";

export const Navbar = () =>{
    const navigate = useNavigate();

    if(localStorage.getItem("token")){
        return(
            <nav>
                <button onClick={() => navigate("/dashboard")}>Dashboard</button>
                <button onClick={() => navigate("/buses")}>Buses</button>
                <button onClick={() => navigate("/routes")}>Routes</button>
                <button onClick={() => navigate("/stations")}>Stations</button>
                <button onClick={() => navigate("/logout")}>Logout</button>
            </nav>
        );
    }
}