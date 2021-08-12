import React from 'react'
import styled from 'styled-components'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react"
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

// Styles

const StyledMainImg = styled.img`
    width: 100vw;
    height: 100vh;
`

const StyledContainerMainTitle = styled.div`
    position: absolute;
    height: 50vh;
    top: 50vh;
    left: 140px;
    background-color: #393E46;
    @media (min-width: 1200px){
        width: 605px;
    }
    @media (min-width: 1400px){
        left: 140px;
        width: 705px;
    }
`
const StyledMenuDiv = styled.div`
    display: flex;
    position: absolute;
    left: 140px;
    top: 40px;
`
const StyledTitleMainP = styled.p`
        font-weight: 700;
        font-size: 32px;
    @media (min-width: 1200px){
        margin-left: 150px;
        margin-top: 10px;
    }
    @media (min-width: 1400px){
        margin-left: 280px;
        margin-top: 20px;
    }
`

const StyledMenuButton = styled(MenuButton)`
    border: none; 
    background-color: #ffffff;
`

const StyledPTitleOne = styled.p`
    font-weight: 400;
    font-size: 16px;
    margin: 48px 50px 9px 50px;
    color: #ffffff;
`
const StyledMainH1 = styled.h1`
    color: #ffffff;
    font-weight: 700;
    @media (min-width: 1200px){
        font-size: 26px;
        margin: 0px 50px 0px 50px;
    }
    @media (min-width: 1450px){
        font-size: 32px;
        line-height: 40px;
        margin: 0px 50px 12px 50px;
    }
    @media (min-width: 1600px){
        font-size: 44px;
        line-height: 80px;
    }
`
const StyledTitleTwo = styled.p`
    font-weight: 400;
    color: #949799;
    line-height: 32px;
    @media (min-width: 1200px){
        padding: 12px 50px; 
        font-size: 17px; 
    }
    @media (min-width: 1450px){
        font-size: 21px;
    }
`

const StyledButtonOne = styled.button`
    margin-left: 50px;
    width: 200px;
    height: 50px;
    background: #ffffff;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
`

const StyledMainDivResponsive = styled.div`
    @media (min-width: 1270px){
        height: 100vh;
    }
`
const HomePage = () => {
    return (
        <StyledMainDivResponsive className='d-none d-sm-flex'>
            <StyledMenuDiv>
                <Menu>
                    <StyledMenuButton>
                        <AiOutlineMenu style={{ fontSize: '25px' }} />
                    </StyledMenuButton>
                    <MenuList>
                        <Link to='/articles'>
                            <MenuItem>Inicio</MenuItem>
                        </Link>
                        <Link to='/weare'>
                            <MenuItem>Creadores del Portal</MenuItem>
                        </Link>
                        <Link to='/everyone'>
                            <MenuItem>Ver mas Artículos</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
                <StyledTitleMainP>Mariano Picón Salas</StyledTitleMainP>
            </StyledMenuDiv>
            <StyledMainImg src='https://i.ibb.co/DMdKmjs/Prueba-Presentacion.png' alt='covid-image' />
            <StyledContainerMainTitle>
                <StyledPTitleOne>Portal Informativo</StyledPTitleOne>
                <StyledMainH1>El Covid 19 y su impacto en el ámbito Educativo</StyledMainH1>
                <StyledTitleTwo>Honra a los trabajadores de la salud y los proveedores de cuidado de tu comunidad que velan por las personas con el Covid 19</StyledTitleTwo>
                <StyledButtonOne>Manten la Prevención</StyledButtonOne>
            </StyledContainerMainTitle>
        </StyledMainDivResponsive>
    )
}

export default HomePage
