import axios from 'axios';

const URL = "http://localhost:8080";

function saveToken(token){
    console.log(token);
    localStorage.setItem('token', token);
}

function getToken(){
    return localStorage.getItem('token');
}

export const fetchLogin = async (body) =>{
    try{
        const response = await axios.post(`${URL}/auth/login`, body);
        if(response.status === 200){
            saveToken(response.data.token);
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const fetchRegister = async (body) =>{
    try{
        const response = await axios.post(`${URL}/auth/register`, body);
        if(response.status === 200){
            saveToken(response.data.token);
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const createBus = async (body) =>{
    try{
        const response = await axios.post(`${URL}/bus`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.statis === 201){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const getBus = async (id) =>{
    try{
        const response = await axios.get(`${URL}/bus/${id}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const updateBus = async (id, body) =>{
    try{
        const response = await axios.put(`${URL}/bus/${id}`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const deleteBus = async (id) =>{
    try{
        const response = await axios.delete(`${URL}/bus/${id}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 204){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const updateBusRoute = async (id, body) =>{
    try{
        const response = await axios.patch(`${URL}/bus/${id}/route`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const getDriver = async (id) =>{
    try{
        const response = await axios.get(`${URL}/driver/${id}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const getDriverOwnInfo = async () =>{
    try{
        const response = await axios.get(`$[URL}/driver/me`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const deleteDriver = async (id) =>{
    try{
        const response = await axios.delete(`${URL}/driver/${id}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 204){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const updateDriver = async (id, body) =>{
    try{
        const response = await axios.put(`${URL}/driver/${id}`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const updateDriverBus = async (id, body) =>{
    try{
        const response = await axios.patch(`${URL}/driver/${id}/bus`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const createRoute = async (body) =>{
    try{
        const response = await axios.post(`${URL}/route`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 201){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const getRoute = async (id) =>{
    try{
        const response = await axios.get(`${URL}/route/${id}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const updateRoute = async (id, body) =>{
    try{
        const response = await axios.put(`${URL}/route/${id}`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
}

export const deleteRoute = async (id) =>{
    try{
        const response = await axios.delete(`${URL}/route/${id}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 204){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const updateRouteStation = async (id, body) =>{
    try{
        const response = await axios.patch(`${URL}/route/${id}/station`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const createStation = async (body) =>{
    try{
        const response = await axios.post(`${URL}/station`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 201){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const getStation = async (id) =>{
    try{
        const response = await axios.get(`${URL}/station/${id}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const updateStation = async (id, body) =>{
    try{
        const response = await axios.put(`${URL}/station/${id}`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const deleteStation = async (id) =>{
    try{
        const response = await axios.delete(`${URL}/station/${id}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 204){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};

export const updateStationRoute = async (id, body) =>{
    try{
        const response = await axios.patch(`${URL}/station/${id}/route`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};