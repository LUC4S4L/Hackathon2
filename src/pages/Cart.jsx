import React, { useEffect, useState } from 'react'
import { getCart } from '../services/api'

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

    useEffect(() => {
        getCartItems()
    }, [])

    return (
        <div>
            {cart.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
            {isLoading && <p>Cargando carrito...</p>}
        </div>
    )
}

export default Cart
