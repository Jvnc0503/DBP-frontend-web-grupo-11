import React, { useState, useEffect } from "react";
import { getRoutes } from "../Api";

export const ListRoutes = () =>{
    const[routes, setRoutes] = useState([]);

    const handleRoutes = async () =>{
        const response = await getRoutes();
        setRoutes(response);
    }

    useEffect(() =>{
        handleRoutes();
    }, []);

    return(
        <section>
            <h2>List of routes</h2>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        Name: {route.name}, Stations: {route.stations.map((station, index) => (
                            <span key={index}>{station.name}</span>
                        ))}
                    </li>
                ))}
            </ul>
        </section>
    );
}