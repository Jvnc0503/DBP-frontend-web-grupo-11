import React, { useState } from 'react';
import { deleteRoute } from '../Api';

export const DeleteRoute = () =>{
    const [name, setName] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await deleteRoute(name);
    }

    return(
        <section>
            <h2>Delete a route</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Route Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}