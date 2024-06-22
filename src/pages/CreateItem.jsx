import React, {useState} from 'react'

import { Button } from '../components/Button'
import { createItem } from '../services/api'
import { navigate } from 'react-router-dom'

export const CreateItem = () => {
    const [boughtInLastMonth, setBoughtInLastMonth] = useState(0)
    const [imgUrl, setImgUrl] = useState('')
    const [isBestSeller, setIsBestSeller] = useState(false)
    const [price, setPrice] = useState(0.0)
    const [stars, setStars] = useState(0)
    const [title, setTitle] = useState('')

    const handleCreateItem = async () => {
        try {
            const response = await createItem({ boughtInLastMonth, imgUrl, isBestSeller, price, stars, title })
            console.log(response)
            navigate(`/items`)
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
            <label>¿Es el mejor vendedor?</label>
            <Button onClick={handleCreateItem}>Crear</Button>
        </div>
    )
}
