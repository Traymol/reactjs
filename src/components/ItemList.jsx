import React from 'react'
import Item from './Item'
import ItemDetail from './ItemDetail'

const ItemList = ({ product }) => {
    return (
        <div>
            {
                product.map((p) => {
                    return (
                        <>
                            <Item
                                key={p.id}
                                title={p.title}
                                image={p.image}
                            />
                            <ItemDetail
                                key={p.id}
                                title={p.title}
                                description={p.description}
                                price={p.price}
                                image={p.image}
                            />
                        </>
                    )
                })
            }
        </div>
    )
}

export default ItemList