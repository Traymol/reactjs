import React from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ title, image, id }) => {
    return (
        <div><Card border='1px' maxW='sm' bg='#ADD2C2'>
            <CardBody>
                <Stack mt='6' spacing='5'>
                    <Heading size='md'>{title} </Heading>
                    <img src={image} alt="" />
                </Stack>
            </CardBody>
            <Divider />
            <Center>
                <CardFooter>
                    <Link to={`/item/${id}`}>
                        <Button variant='solid' colorScheme='blue'>
                            Ver detalle
                        </Button>
                    </Link>
                </CardFooter>
            </Center>
        </Card></div>
    )
}

export default Item