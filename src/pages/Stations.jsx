import React from "react";
import { Link } from "react-router-dom";

export const Stations = () =>{
    return(
        <section>
            <nav>
                <ul>
                    <li>
                        <Link to="/stations/asign">Asign Station</Link>
                    </li>
                    <li>
                        <Link to="/stations/register">Register Station</Link>
                    </li>
                    <li>
                        <Link to="/stations/list">List Stations</Link>
                    </li>
                    <li>
                        <Link to="/stations/delete">Delete Station</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}