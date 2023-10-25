import { Button, HStack, Text } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';


const ItemCount = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < 9) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <HStack align='center' spacing='4' >
            <Button onClick={increment} w='5px' pb='1' colorScheme='teal' variant='outline'>
                +
            </Button>
            <Text fontSize='lg' px='4' py='1.5' borderWidth='1px' borderRadius='5' borderColor='#a8dadc' >{count}</Text>
            <Button onClick={decrement} w='5px' pb='1' colorScheme='teal' variant='outline'>
                -
            </Button>
        </HStack>
    );
}
export default ItemCount