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
            <h1>List of buses</h1>
            <ul>
                <li key={index}>
                        Name: {bus.name}, Route: {bus.route.name}
                </li>
            </ul>
        </section>
    );
}