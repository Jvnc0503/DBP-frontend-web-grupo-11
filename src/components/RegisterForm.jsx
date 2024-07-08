import React, { useState } from "react"
import { fetchRegister } from "../Api"
import { useNavigate } from "react-router-dom"

export const RegisterForm = () =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDriver , setIsDriver] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await fetchRegister({firstName, lastName, email, password, isDriver});
        setTimeout(() => {
            navigate("/dashboard");
        }, 1000);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}