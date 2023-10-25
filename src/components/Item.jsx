import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ title, image, id }) => {
    return (
        <Center p="0" >
            <div><Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title} </Heading>
                        <img src={image} alt="" />
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to={`/item/${id}`}>
                            <Button variant='solid' colorScheme='blue'>
                                Ver detalle
                            </Button>
                        </Link>

                    </ButtonGroup>
                </CardFooter>
            </Card></div>
        </Center>
    )
}

export default Item