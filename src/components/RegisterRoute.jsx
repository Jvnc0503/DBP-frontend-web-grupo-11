import React, { useState } from "react"
import { createRoute } from "../Api"

export const RegisterRoute = () =>{
    const [name, setName] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await createRoute({name})
    }

    return(
        <section>
            <h2>Register new route</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}