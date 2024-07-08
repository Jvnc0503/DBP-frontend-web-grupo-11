import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <br/>
            <img src="https://sistemas.atu.gob.pe/RegistroTUPA/Content/imagenes/Logotipo_ATU.png"
            alt="Logo ATU"
            style={{width: "400px", height: "auto"}}/>
            <h1>Welcome to Metropolitano!</h1>
            <br/>
            <h2>This web page is exclusive for Driver admins</h2>
            <br/>
            <button onClick={() => navigate("/auth/login")}>Login Page</button>
            <br/>
            <button onClick={() => navigate("/auth/register")}>Register Page</button>
        </div>
    );
}