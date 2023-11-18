import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Flex bg='#ADD2C2'>
                <Box borderRadius='4' m='6' p='4' pr='8' pl='8' bg='#CFE795'>
                    <Link to={'/'}>
                        <h1>T&T Store</h1>
                    </Link>
                </Box>
                <Spacer />
                <Box borderRadius='4' m='6' p='4' bg='#CFE795'>
                    <Menu>
                        <MenuButton>
                            Categorías
                        </MenuButton>
                        <MenuList bg='#A7D3A6'>
                            <Link to={`/category/${"men's clothing"}`}>
                            <MenuItem bg='#A7D3A6'>Ropa de hombre</MenuItem>
                            </Link>
                            <Link to={`/category/${"women's clothing"}`}>
                            <MenuItem bg='#A7D3A6'>Ropa de mujer</MenuItem>
                            </Link>
                            <Link to={`/category/${"jewelery"}`}>
                            <MenuItem bg='#A7D3A6'>Joyería</MenuItem>
                            </Link>
                            <Link to={`/category/${"electronics"}`}>
                            <MenuItem bg='#A7D3A6'>Tecnología</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Link to='/cart'>
                <Box w='14' borderRadius='4' m='6' p='4' bg='#CFE795'>
                    <CartWidget />
                </Box>
                </Link>
            </Flex>
        </div>
    )
}

export default NavBar