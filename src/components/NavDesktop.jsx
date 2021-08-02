import React from 'react'
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap'
import styled from 'styled-components'
// Styles
const StyledNavContainer = styled(Container)`
    padding: 10px;
    display: flex;
    justify-content: center !important;
`
const StyledLinksNav = styled.a`
    color: #ffffff;
    padding: 0px 10px;
    text-decoration: none;
`
const StyledNavbarMain = styled(Navbar)`
    background-color: #393E46;
`

const NavDesktop = () => {
    return (
        <div className = 'd-none d-sm-block'>
            <StyledNavbarMain>
                <StyledNavContainer>
                    <Nav>
                        <StyledLinksNav >Inicio</StyledLinksNav>
                        <StyledLinksNav>Articulos</StyledLinksNav>
                        <StyledLinksNav>Nosotros</StyledLinksNav>
                    </Nav>
                </StyledNavContainer>
            </StyledNavbarMain>
        </div>
    )
}

export default NavDesktop
