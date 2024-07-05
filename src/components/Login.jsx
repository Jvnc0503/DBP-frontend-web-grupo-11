import React, { useState } from "react";
import "./App.css";
import { fetchLogin } from "../Api";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e) =>{ñ
        e.preventDefault();
        await fetchLogin({email, password});
    };

    return(
        <section>
            <h1 className="title">Login to Metropolitano</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit"></button>
            </form>
        </section>
    );
}

export default Login;