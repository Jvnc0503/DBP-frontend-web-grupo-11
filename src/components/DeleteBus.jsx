import React, { useState } from "react";
import { deleteBus } from "../Api";

export const DeleteBus = () =>{
    const [plate, setPlate] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await deleteBus(plate);
    }

    return(
        <section>
            <h2>Delete a bus</h2>
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
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}