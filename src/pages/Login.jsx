import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Link } from "react-router-dom";

export const Login = () =>{
    return(
        <>
            <section>
                <h1 className="title">Login to Metropolitano</h1>
                <LoginForm/>
                <br/>
                <Link to="/auth/register">Don't have an account?, register here</Link>
            </section>
        </>
    );
}