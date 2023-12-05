import { Box, Flex, Badge } from '@chakra-ui/react'
import React from 'react'
import { useCart } from '../context/CartContext';

const CartWidget = () => {

    const {cart} = useCart();
    return (
        <Flex>
            <img src="https://cdn-icons-png.flaticon.com/256/1170/1170678.png" alt="carrito" />
            <Box>
                <Badge colorScheme='green' > {cart.length} </Badge>
            </Box>
        </Flex>
    )
}

export default CartWidget