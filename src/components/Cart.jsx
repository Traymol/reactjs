import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Card, Center, Box, Button, Stack, Divider } from '@chakra-ui/react';
import SendOrders from './SendOrders';

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const [cartItems, setCartItems] = useState([]);

    const handleBuy = () => {
        setCartItems(cart);
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div>
            {cart.length === 0 ? (
                <Center fontWeight='bold' m='10' >Tu carrito está vacío.</Center>
            ) : (
                <Stack>
                    <ul>
                        {cart.map(p => {
                            return (
                                <li key={p.id}>
                                    <Center mt='5' >
                                        <Card maxWidth='200px' border='1px' m='10px' bg='#ADD2C2'>
                                            <Box m='10px' >
                                                <div>
                                                    <p>{p.title}</p>
                                                    <Divider borderColor='black' />
                                                    <img src={p.image} />
                                                    <Divider borderColor='black' />
                                                    <p>${p.price}</p>
                                                    <Button marginTop='8px' colorScheme='red' onClick={() => handleRemoveFromCart(product.id)}>
                                                        Remover
                                                    </Button>
                                                </div>
                                            </Box>
                                        </Card>
                                    </Center>
                                </li>
                            )
                        }
                        )}
                    </ul>
                    <Center>
                        <Button mb='10' colorScheme='teal' width='120px' onClick={handleBuy} >
                            Comprar
                        </Button>
                    </Center>
                    {cartItems.length > 0 && <SendOrders cart= {cartItems} />}
                </Stack>
            )
            }

        </div>
    );
};

export default Cart;
 