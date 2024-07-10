import React from "react";
import { useNavigate } from "react-router-dom";

export const DeleteAccount = () => {
    const navigate = useNavigate();

    return(
        <section>
            <h2>Are you sure you want to delete your account?</h2>
            <button onClick={() => navigate("/delete/driver")}>Yes</button>
            <button onClick={() => navigate("/dashboard")}>No</button>
        </section>
    );
}