import axios from 'axios';

const BACKEND_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com'; // Spring Boot

export const fetchRegister = async (username,password,role) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/register`, {
            'username': username,
            'password': password,
            'role': role,
        });
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchLogin = async (username,password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/login`, {username,password});
        //localStorage.setItem('token', response.data.token);
        //localStorage.setItem('userId', response.data.userId);
        return response;
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
        const userId = localStorage.getItem('userId');
        const response = await axios.post(`${BACKEND_URL}/buy`, {
            'userId': userId,
        }, {
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

export const addItem = async (itemId) => {
    try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const response = await axios.post(`${BACKEND_URL}/cart`, {
            'userId': userId,
            'itemId': itemId,
        }, {
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

export const getCart = async () => {
    try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
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
