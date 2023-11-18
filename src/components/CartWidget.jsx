import { Box, Flex, Badge } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {

    return (
        <Flex>
            <img src="https://cdn-icons-png.flaticon.com/256/1170/1170678.png" alt="carrito" />
            <Box>
                <Badge colorScheme='green' > 7 </Badge>
            </Box>
        </Flex>
    )
}

export default CartWidget