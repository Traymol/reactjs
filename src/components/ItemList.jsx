import React from 'react'
import Item from './Item'
import { Center } from '@chakra-ui/react'

const ItemList = ({ product }) => {
    return (
        <div>
            {
                product.map((p) => {
                    return (
                        <Center pt='10' >
                            <Item
                                id={p.id}
                                title={p.title}
                                description={p.description}
                                price={p.price}
                                image={p.image}
                            />
                        </Center>
                    )
                })
            }
        </div>
    )
}

export default ItemList