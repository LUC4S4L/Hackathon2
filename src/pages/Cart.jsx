import React, { useEffect, useState } from 'react'
import { getCart, buyCart } from '../services/api'

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

    const buyItems = async () => {
        try {
            const response = await buyCart(cart)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCartItems()
    }, [])

    return (
        <div>
            {cart.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
            <button onClick={buyItems}>Comprar</button>
            {isLoading && <p>Cargando carrito...</p>}
        </div>
    )
}

export default Cart
