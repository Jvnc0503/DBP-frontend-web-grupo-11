import React, { useState } from "react";
import { addRouteStation } from "../Api";

export const AsignStation = () =>{
    const [routeName, setRouteName] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await addRouteStation(routeName, {name});
    }

    return(
        <section>
            <h2>Asign a station to a route</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="routeName">Route Name:</label>
                    <input
                        type="text"
                        name="routeName"
                        id="routeName"
                        value={routeName}
                        onChange={(e) => setRouteName(e.target.value)}
                        required
                    />
                </div>
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