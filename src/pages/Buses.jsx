import React from "react";
import { Link } from "react-router-dom";

export const Buses = () =>{
    return(
        <section>
            <nav>
                <ul>
                    <li>
                        <Link to="/buses/asign">Asign Bus</Link>
                    </li>
                    <li>
                        <Link to="/buses/register">Register Bus</Link>
                    </li>
                    <li>
                        <Link to="/buses/list">List Buses</Link>
                    </li>
                    <li>
                        <Link to="/buses/delete">Delete Bus</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}