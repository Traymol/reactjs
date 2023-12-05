import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        const database = getFirestore()
        const itemsCollection = collection(database, "productos")
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProducts(docs)
        })
    })


    return (
        <>
            <ItemDetail product={products} />
        </>
    )
}

export default ItemDetailContainer