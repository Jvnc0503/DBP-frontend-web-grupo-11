import React, { useState } from "react"
import "./App.css"
import { createRoute } from "../Api"

const RegisterRoute = () =>{
    const [name, setName] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await createRoute({name})
    }

    return(
        <section>
            <h1>Register new route</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default RegisterRoute;