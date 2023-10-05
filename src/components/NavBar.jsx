import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>
            <Flex bg='#ADD2C2'>
                <Box borderRadius='4' m='6' p='4' pr='8' pl='8' bg='#CFE795'>
                    <h1>T&T</h1>
                </Box>
                <Spacer />
                <Box borderRadius='4' m='6' p='4' bg='#CFE795'>
                    <Menu>
                        <MenuButton>
                        Categorías
                        </MenuButton>
                        <MenuList bg='#A7D3A6'>
                            <MenuItem bg='#A7D3A6'>Monitores</MenuItem>
                            <MenuItem bg='#A7D3A6'>Computadoras armadas</MenuItem>
                            <MenuItem bg='#A7D3A6'>Periféricos</MenuItem>
                            <MenuItem bg='#A7D3A6'>Componentes</MenuItem>
                            <MenuItem bg='#A7D3A6'>Consolas</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box w='14' borderRadius='4' m='6' p='4' bg='#CFE795'>
                    <CartWidget />
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar