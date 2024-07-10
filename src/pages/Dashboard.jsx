import React, { useState, useEffect } from "react";
import { getDriverOwnInfo } from "../Api";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const [driver, setDriver] = useState({});
    const navigate = useNavigate();

    const handleDriver = async () => {
        const response = await getDriverOwnInfo();
        console.log(response);
        setDriver(response);
    };

    useEffect(() => {
        handleDriver();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="DriverIcon" style={{ marginRight: "100px", width: "200px", height: "auto" }} />
                <div>
                    {driver && (
                        <div>
                            <p>Id: {driver.id}</p>
                            <p>First Name: {driver.firstName}</p>
                            <p>Last Name: {driver.lastName}</p>
                            <p>Email: {driver.email}</p>
                        </div>
                    )}
                </div>
            </div>
            <br/>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bus-logo.svg/2048px-Bus-logo.svg.png" alt="BusIcon" style={{ marginRight: "100px", width: "200px", height: "auto" }}/>
                <div>
                    <h2>Asigned Bus</h2>
                    {driver.bus ? (
                        <div>
                            <p>Plate: {driver.bus.plate}</p>
                            <p>Route: {driver.bus.route?.name || 'null'}</p>
                        </div>
                    ) : (
                        <p>No bus information available.</p>
                    )}
                </div>
            </div>
            <button onClick={() => navigate("/delete")}>Delete Account</button>
        </div>
    );
};