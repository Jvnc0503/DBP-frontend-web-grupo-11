import React, { useState, useEffect } from "react";
import { getStations } from "../Api";

export const ListStations = () =>{
    const [stations, setStations] = useState([]);

    const handleStations = async () =>{
        const response = await getStations();
        setStations(response);
    }

    useEffect(() =>{
        handleStations();
    }, []);

    return(
        <section>
            <h2>List of stations</h2>
            <ul>
                {stations.map((station, index) => (
                    <li key={index}>
                        {station.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}