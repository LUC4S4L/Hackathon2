import React, { useEffect, useState } from 'react'
import { getCart, buyCart, addItem, deleteCartItem } from '../services/api'

export const Cart = () => {
    const [cart, setCart] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getCartItems = async () => {
        if (isLoading) return
        setIsLoading(true)
        try {
            const response = await getCart(userId)
            setCart(response)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const buyCartItems = async () => {
        try {
            const response = await buyCart();
            if (response) {
                setCart([]);
                alert('Purchase successful!');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const addItems = async () => {
        try {
            const response = await addItem(newItem);
            if (response) {
                setCart([...cart, response]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const deleteItems = async () => {
        try {
            const response = await deleteCartItem({ id: itemId });
            if (response) {
                setCart(cart.filter(item => item.id !== itemId)); // Update state by removing the item
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCartItems()
    }, [])

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <button onClick={() => deleteItems(item.id)}>Delete</button>
                </div>
            ))}
            {isLoading && <p>Loading cart...</p>}
            <button onClick={buyCartItems}>Buy Cart</button>
            <div>
                <h2>Add Item</h2>
                <input 
                    type="text" 
                    placeholder="Item name" 
                    value={newItem.name} 
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} 
                />
                <input 
                    type="number" 
                    placeholder="Quantity" 
                    value={newItem.quantity} 
                    onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })} 
                />
                <button onClick={addItems}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Cart