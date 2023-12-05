import { Button, Flex, Text } from '@chakra-ui/react';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'


const SendOrders = ({ cart }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(null);

    const database = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id));
    }

    const order = {
        Cliente: {
            Nombre: name,
            Email: email
        },
        Items: {
            cart
        }
    }

    const ordersCollection = collection(database, "MiOrden")

    return (
        <div>

            <form onSubmit={handleSubmit} >
                <Flex borderRadius="5" borderWidth="1px" borderColor="black" mb="10" ml="10" mt="5" maxWidth="550" direction="column" justify="space-between" height="240" pl="10" pt="4" bg="#B8E9E1" >
                    <Text>Formulario de compra.</Text>
                    <Flex justify='space-between' maxWidth="250">
                        <label htmlFor="name" >Nombre</label>
                        <input type="text" id='name' placeholder='Nombre completo' onChange={(e) => setName(e.target.value)} />
                    </Flex>

                    <Flex justify='space-between' maxWidth='250' >
                        <label htmlFor="email" >Email</label>
                        <input type="email" placeholder='Email' id="email" onChange={(e) => setEmail(e.target.value)} />
                    </Flex>
                    <Button type='submit' maxW="400" mt="6" bg='#026C80' h="8"  >Enviar</Button>
                    <Text pb="5" >Número de orden: {orderId}</Text>
                </Flex>
            </form>
        </div>
    )
}

export default SendOrders