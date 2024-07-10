import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Link } from "react-router-dom";

export const Login = () =>{
    return(
        <section>
            <br/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_ATU.png" alt="Logo de la ATU" className="logo-image" style={{width: "200px", height: "auto"}}/>
            <h1 className="title">Driver Login</h1>
            <LoginForm/>
            <br/>
            <Link to="/auth/register">Don't have an account?, register here.</Link>
        </section>
    );
}