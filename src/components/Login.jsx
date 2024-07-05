import React, { useState } from "react";
import "./App.css";
import { fetchLogin } from "../Api";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await fetchLogin({email, password});
    };

    return(
        <form onSubmit={handleSubmit}>
            
        </form>
    );
}

export default Login;