import React, { useState } from "react";
import { updateDriverOwnBus } from "../Api";

export const AsignBus = () =>{
    const [plate, setPlate] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await updateDriverOwnBus({plate});
    }

    return(
        <section>
            <h2>Asign yourself a bus</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="plate">Plate</label>
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