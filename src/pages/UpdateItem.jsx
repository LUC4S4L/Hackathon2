import React, {useState} from 'react'

import { updateItem } from '../services/api'
import { useNavigate } from 'react-router-dom'

export const UpdateItem = () => {
    const [boughtInLastMonth, setBoughtInLastMonth] = useState(0)
    const [imgUrl, setImgUrl] = useState('')
    const [isBestSeller, setIsBestSeller] = useState(false)
    const [price, setPrice] = useState(0.0)
    const [stars, setStars] = useState(0)
    const [title, setTitle] = useState('')

    const handleCreateItem = async () => {
        try {
            const response = await updateItem(boughtInLastMonth, imgUrl, isBestSeller, price, stars, title)
            console.log(response)
            useNavigate(`/items`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="number" placeholder="Estrellas" value={stars} onChange={(e) => setStars(e.target.value)} />
            <input type="number" placeholder="Comprado el último mes" value={boughtInLastMonth} onChange={(e) => setBoughtInLastMonth(e.target.value)} />
            <input type="text" placeholder="URL de la imagen" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
            <input type="checkbox" checked={isBestSeller} onChange={(e) => setIsBestSeller(e.target.checked)} />
            <label>¿Es el más vendido?</label>
            <Button onClick={handleCreateItem}>Crear</Button>
        </div>
    )
}