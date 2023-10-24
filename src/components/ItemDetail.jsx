import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Center } from '@chakra-ui/react'

const ItemDetail = ({ title, description, price, image }) => {
    return (
        <Center p="0" >
            <div><Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title} </Heading>
                        <img src={image} alt="" />
                        <Text>
                            {description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card></div>
        </Center>
    )
}

export default ItemDetail