import React from "react";
import { Link } from "react-router-dom";

export const Rutas = () =>{
    return(
        <section>
            <nav>
                <ul>
                    <li>
                        <Link to="/routes/asign">Asign Route</Link>
                    </li>
                    <li>
                        <Link to="/routes/register">Register Route</Link>
                    </li>
                    <li>
                        <Link to="/routes/list">List Routes</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}