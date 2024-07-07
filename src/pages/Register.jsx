import React from "react";
import { RegisterForm } from "../components/RegisterForm";
import { Link } from "react-router-dom";

export const Register = () =>{
    return(
        <>
            <section>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24jZO4suo-FYsup52cBOLqpgqKoMqfdZtDA&s" alt="Logo de la ATU" className="logo-image"/>
            <h1 className="title">Driver Register</h1>
            <RegisterForm/>
            <br/>
            <Link to="/auth/login">Already have an account?, login here.</Link>
            </section>
        </>
    );
}