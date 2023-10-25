import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {


    /*     const productos = [
        { id: "1", name: "A", description: "Descripción de producto A", stock: 5, price: 2000 },
        { id: "2", name: "B", description: "Descripción de producto B", stock: 15, price: 5000 },
        { id: "3", name: "C", description: "Descripción de producto C", stock: 23, price: 3400 },
        { id: "4", name: "D", description: "Descripción de producto D", stock: 12, price: 6500 }
    ]
    
    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
                setTimeout(() => {
                    resolve(productos)
                }, 3000)
            } else {
                reject("No se encontraron productos")
            }
        })
    
        mostrarProductos
            .then((resultado) => {
                console.log(resultado)
            })
            .catch((error) => {
                console.log(error)
            }) */

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