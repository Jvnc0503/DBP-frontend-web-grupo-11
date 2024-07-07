import React from "react";
import { LoginForm } from "../components/LoginForm";

export const Login = () =>{
    return(
        <>
            <section>
                <h1 className="title">Login to Metropolitano</h1>
                <LoginForm/>
            </section>
        </>
    );
}