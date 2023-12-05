import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Flex bg='#ADD2C2'>
                <Box borderRadius='4' m='6' p='4' pr='8' pl='8' bg='#026C80'>
                    <Link to={'/'}>
                        <Text fontWeight='bold' color='#A7D3A6' >T&T Store</Text>
                    </Link>
                </Box>
                <Spacer />
                <Box borderRadius='4' m='6' p='4' bg='#CFE795'>
                    <Menu>
                        <MenuButton>
                            Categorías
                        </MenuButton>
                        <MenuList bg='#A7D3A6'>
                            <Link to={`/category/${"componentes"}`}>
                            <MenuItem bg='#A7D3A6'>Componentes de pc</MenuItem>
                            </Link>
                            <Link to={`/category/${"perifericos"}`}>
                            <MenuItem bg='#A7D3A6'>Periféricos</MenuItem>
                            </Link>
                            <Link to={`/category/${"pantallas"}`}>
                            <MenuItem bg='#A7D3A6'>Pantallas</MenuItem>
                            </Link>
                            <Link to={`/category/${"consolas"}`}>
                            <MenuItem bg='#A7D3A6'>Consolas</MenuItem>
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