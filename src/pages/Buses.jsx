import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export const Buses = () =>{
    return(
        <section>
            <nav>
                <ul>
                    <li>
                        <Link to="/buses/register">Register New Bus</Link>
                    </li>
                    <li>
                        <Link to="/buses/list">List All Buses</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}