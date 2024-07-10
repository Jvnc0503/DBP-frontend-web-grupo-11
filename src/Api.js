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
            alert('Login successful')
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
            alert('Register successful')
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

export const deleteDriver = async (email) =>{
    try{
        const response = await axios.delete(`${URL}/driver/${email}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 204){
            alert('Driver deleted successfully')
            localStorage.removeItem('token');
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        alert('Driver delete failed')
        console.error('Error:', error.message);
        throw error;
    }
}

export const createBus = async (body) =>{
    try{
        const response = await axios.post(`${URL}/bus`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 201){
            alert('Bus created successfully')
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

export const getBuses = async () =>{
    try{
        const response = await axios.get(`${URL}/bus`,{
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
        throw error
    }
};

export const deleteBus = async (plate) =>{
    try{
        const response = await axios.delete(`${URL}/bus/${plate}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 204){
            alert('Bus deleted successfully');
            return response.data;
        }
        else{
            alert('Bus not found')
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
}

export const getDriverOwnInfo = async () =>{
    try{
        const response = await axios.get(`${URL}/driver/me`,{
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

export const patchDriverBus = async (email, body) =>{
    try{
        const response = await axios.patch(`${URL}/driver/${email}/bus`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            alert('Bus assigned successfully');
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
            alert('Route created successfully')
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

export const getRoutes = async () =>{
    try{
        const response = await axios.get(`${URL}/route`,{
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

export const deleteRoute = async (name) =>{
    try{
        const response = await axios.delete(`${URL}/route/${name}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 204){
            alert('Route deleted successfully');
            return response.data;
        }
        else{
            alert('Route delete failed')
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }

}

export const patchBusRoute = async (plate, body) =>{
    try{
        const response = await axios.patch(`${URL}/bus/${plate}/route`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            alert('Route assigned successfully');
            return response.data;
        }
        else{
            alert('Route assign failed')
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        console.error('Error:', error.message);
        throw error;
    }
}

export const createStation = async (body) =>{
    try{
        const response = await axios.post(`${URL}/station`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 201){
            alert('Station created successfully');
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        alert('Station create failed');
        console.error('Error:', error.message);
        throw error;
    }
};

export const getStations = async () =>{
    try{
        const response = await axios.get(`${URL}/station`,{
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

export const deleteStation = async (name) =>{
    try{
        const response = await axios.delete(`${URL}/station/${name}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 204){
            alert('Station deleted successfully');
            return response.data;
        }
        else{
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    }
    catch(error){
        alert('Station delete failed')
        console.error('Error:', error.message);
        throw error;
    }

}

export const addRouteStation = async (routeName, body) =>{
    try{
        const response = await axios.patch(`${URL}/route/${routeName}/station`, body,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            }
        });
        if(response.status === 200){
            alert('Station added to route successfully');
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