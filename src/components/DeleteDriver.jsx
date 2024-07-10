import React, { useState } from "react";
import { deleteDriver } from "../Api";
import { useNavigate } from "react-router-dom";

export const DeleteDriver = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        await deleteDriver(email);
        navigate("/home");
    };

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <h3>Please enter your email</h3>
                <label htmlFor="email">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                <button type="submit">Delete</button>
            </form>
        </section>
    );
}