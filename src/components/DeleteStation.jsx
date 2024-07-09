import React, { useState } from "react";
import { deleteStation } from "../Api";

export const DeleteStation = () => {
    const [name, setName] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await deleteStation(name);
    };
    
    return (
        <section>
        <h2>Delete a station</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Station Name:</label>
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