import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ product }) => {
    const { id } = useParams()

    const filteredProduct = product.filter((product) => product.id == id)

    return (
        <>
            {
                filteredProduct.map((p) => {
                    return (
                        <Center p="0">
                            <div>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{p.title}</Heading>
                                            <img src={p.image} alt="imagen" />
                                            <Text>
                                                {p.description}
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                ${p.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter flexDirection='column'>
                                        <Center>
                                            <ItemCount />
                                        </Center>
                                        
                                        <Center pt='10' spacing='2'>
                                            <Button variant='solid' colorScheme='blue'>
                                                Buy now
                                            </Button>
                                            <Button variant='ghost' colorScheme='blue'>
                                                Add to cart
                                            </Button>
                                        </Center>
                                    </CardFooter>
                                </Card>
                            </div>
                        </Center>
                    );
                })
            }
        </>
    )
}

export default ItemDetail
