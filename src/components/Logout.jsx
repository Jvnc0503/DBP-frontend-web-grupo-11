import React from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () =>{
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/home");
    }

    const back = () =>{
        navigate("/dashboard");
    }

    return(
        <section>
            <h3>Are you sure you want to logout?</h3>
            <button onClick={logout}>Yes</button>
            <button onClick={back}>No</button>
        </section>
    );
}