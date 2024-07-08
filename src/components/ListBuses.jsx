import React, { useState, useEffect } from "react";
import { getBuses } from "../Api";

export const ListBuses = () =>{
    const [buses, setBuses] = useState([]);

    const handleBuses = async () =>{
        const response = await getBuses();
        setBuses(response);
    }

    useEffect(() =>{
        handleBuses();
    }, []);

    return(
        <section>
            <h2>List of buses</h2>
            <ul>
                {buses.map((bus, index) => (
                    <li key={index}>
                        Plate: {bus.plate}, Route: {bus.route?.name || "null"}
                    </li>
                ))}
            </ul>
        </section>
    );
}