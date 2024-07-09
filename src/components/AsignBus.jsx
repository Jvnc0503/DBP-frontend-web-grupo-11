import React, { useState } from "react";
import { patchDriverBus } from "../Api";

export const AsignBus = () =>{
    const [email, setEmail] = useState("");
    const [plate, setPlate] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await patchDriverBus(email, {plate});
    }

    return(
        <section>
            <h2>Asign a bus to a driver</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Driver Email:</label>
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
                    <label htmlFor="plate">Plate:</label>
                    <input
                        type="text"
                        name="plate"
                        id="plate"
                        value={plate}
                        onChange={(e) => setPlate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}