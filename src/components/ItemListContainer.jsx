import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Center } from '@chakra-ui/react';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const database = getFirestore();
                const itemsCollection = collection(database, 'productos');

                let productsQuery = query(itemsCollection);
                if (category) {
                    productsQuery = query(itemsCollection, where('category', '==', category));
                }

                const snapshot = await getDocs(productsQuery);
                const docs = snapshot.docs.map((doc) => doc.data());
                setProducts(docs);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [category]);
    return (
        <Center pb='10'>
            <ItemList product={products} />
        </Center>
    );
};

export default ItemListContainer;
