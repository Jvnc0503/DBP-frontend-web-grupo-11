import React, { useState } from "react";
import { patchBusRoute } from "../Api";

export const AsignRoute = () =>{
    const [plate, setPlate] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await patchBusRoute(plate, {name});
    }

    return(
        <section>
            <h2>Asign a route to your bus</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="plate">Bus Plate:</label>
                    <input
                        type="text"
                        name="plate"
                        id="plate"
                        value={plate}
                        onChange={(e) => setPlate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name">Route Name:</label>
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