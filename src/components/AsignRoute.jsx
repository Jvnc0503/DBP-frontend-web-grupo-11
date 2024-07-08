import React, { useState } from "react";
import { updateBusOwnRoute } from "../Api";

export const AsignRoute = () =>{
    const [name, setName] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await updateBusOwnRoute({name});
    }

    return(
        <section>
            <h2>Asign a route to a bus</h2>
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