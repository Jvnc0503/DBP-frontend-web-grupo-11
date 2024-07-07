import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Link } from "react-router-dom";

export const Login = () =>{
    return(
        <>
            <section>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24jZO4suo-FYsup52cBOLqpgqKoMqfdZtDA&s" alt="Logo de la ATU" className="logo-image"/>
                <h1 className="title">Driver Login</h1>
                <LoginForm/>
                <br/>
                <Link to="/auth/register">Don't have an account?, register here.</Link>
            </section>
        </>
    );
}