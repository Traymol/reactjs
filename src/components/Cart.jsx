import React from 'react';
import { useCart } from '../context/CartContext';
import { Card, Center, Box, Button, Stack, Divider } from '@chakra-ui/react';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <Stack>
                    <ul>
                        {cart.map(product => {
                            return (
                                <li key={product.id}>
                                    <Center>
                                        <Card maxWidth='200px' border='1px' m='10px' >
                                            <Box m='10px' >
                                                <div>
                                                    <p>{product.title}</p>
                                                    <Divider />
                                                    <p>${product.price}</p>
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
                        <Button colorScheme='teal' width='120px'>
                            Comprar
                        </Button>
                    </Center>
                </Stack>
            )
            }
        </div>
    );
};

export default Cart;
