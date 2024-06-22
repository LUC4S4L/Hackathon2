import React, { useEffect, useState } from 'react';
import { getItems } from '../services/api';

const Items = () => {
    const [items, setItems] = useState([]);
    const [lastKey, setLastKey] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getItemsPaginated = async () => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const limit = 10;
            const response = await getItems(limit, lastKey);
            setItems(prevItems => [...prevItems, ...response.Items]);
            setLastKey(response.LastKey);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

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
            {items.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
            {isLoading && <p>Cargando más ítems...</p>}
        </div>
    );
};

export default Items;
