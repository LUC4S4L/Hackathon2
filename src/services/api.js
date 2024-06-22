import axios from 'axios';

const BACKEND_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com'; // Spring Boot

export const register = async (body) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/register`, body);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const login = async (body) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/login`, body);
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const createItem = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${BACKEND_URL}/items`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const updateItem = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`${BACKEND_URL}/items`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const deleteItem = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${BACKEND_URL}/item/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getItem = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BACKEND_URL}/item/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getItems = async (limit, lastKey) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BACKEND_URL}/items?limit=${limit}&lastKey=${lastKey}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const buyCart = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${BACKEND_URL}/buy`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const addItem = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${BACKEND_URL}/cart`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const deleteCartItem = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${BACKEND_URL}/cart`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getCart = async (userId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BACKEND_URL}/cart/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
