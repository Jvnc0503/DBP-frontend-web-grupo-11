import React, { useState } from "react"
import { createStation } from "../Api"

export const RegisterStation = () =>{
    const [name, setName] = useState("");
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await createStation({name});
    }

    return(
        <section>
            <h2>Register new station</h2>
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