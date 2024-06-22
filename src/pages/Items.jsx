import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItems, deleteItem } from '../services/api';

const Items = () => {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [lastKey, setLastKey] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getItemsPaginated = async () => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const limit = 10;
            const response = await getItems(limit, lastKey);
            setItems(prevItems => [...prevItems, ...response.items]);
            setLastKey(response.lastKey.asin);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const addItemToCart = async (item) => {
        try {
            const response = await addItem(item.id);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const createItem = async () => {
        navigate(`/create-item`);
    }

    const removeItem = async (id) => {
        try {
            const response = await deleteItem(id);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getItemsPaginated();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            getItemsPaginated();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    return (
        <div>
            <button onClick={createItem}>Crear ítem</button>
            {items.map((item, index) => (
                <div key={index}>
                    {item.name}
                    <button onClick={() => addItemToCart(item.id)}>Agregar al carrito</button>
                    <button onClick={() => navigate(`/update-item/${item.id}`)}>Editar</button>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
            ))}
            {isLoading && <p>Cargando más ítems...</p>}
        </div>
    );
};

export default Items;
