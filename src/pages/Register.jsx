import React from "react";
import { RegisterForm } from "../components/RegisterForm";
import { Link } from "react-router-dom";

export const Register = () =>{
    return(
        <section>
            <br/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_ATU.png" alt="Logo de la ATU" className="logo-image" style={{width: "200px", height: "auto"}}/>
            <h1 className="title">Driver Register</h1>
            <RegisterForm/>
            <br/>
            <Link to="/auth/login">Already have an account?, login here.</Link>
        </section>
    );
}