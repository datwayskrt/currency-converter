import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import MobileMenu from './MobileMenu'

import useWindowDimensions from '../../utils/useWindowDimensions'

import { MdMenu, MdClose } from 'react-icons/md'

import {
    Container,
    Nav,
    NavLogo,
    NavMenu,
    NavItem,
    NavLink,
    MobileMenuIcon
} from './styles'

const Menu = () => {

    const { width } = useWindowDimensions();

    const history = useHistory();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const IconConfig = {
        color: '#777',
        contactIconSize: 20,
        menuIconSize: 34
    } 

    return(
        <Container width={width}>
            <Nav width={width}>
                {/* <NavElements> */}
                    {/* <NavLogo 
                        onClick={() => history.push('/')}
                        src='./images/logo.png'
                    /> */}
                    <h1>Conversor</h1>

                    {(width >= 920) ?
                        <>
                            <NavMenu>
                                <NavItem>
                                    <NavLink to='/'>Como usar?</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/'>Histórico</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/'>Notificações</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/'>Sobre</NavLink>
                                </NavItem>
                            </NavMenu>

                            <h1>Português</h1>
                        </>
                        :
                        <>
                            <MobileMenuIcon onClick={() => setMenuOpen(!isMenuOpen)}>
                                {isMenuOpen
                                    ? <MdClose color={IconConfig.color} size={IconConfig.menuIconSize} />
                                    : <MdMenu color={IconConfig.color} size={IconConfig.menuIconSize} />
                                }
                            </MobileMenuIcon>
                        </>
                    }

                    {/* {(isMenuOpen && width < 920) ? <MobileMenu /> : null} */}
            </Nav>
        </Container>
    )
}

export default Menu;