import React, { useState } from "react"
import { createBus } from "../Api"

export const RegisterBus = () =>{
    const [plate, setPlate] = useState("");
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await createBus({plate})
    }

    return(
        <section>
            <h1>Register new bus</h1>
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