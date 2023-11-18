import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        
        return data
    }
    
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        getProducts().then((p) => setProduct(p))
    }, [])
    const { category } = useParams()
    
    const filteredProduct = product.filter((product) => product.category == category)

    return (
        <>
            <ItemList product={filteredProduct} />
        </>
    )
}
export default ItemListContainer