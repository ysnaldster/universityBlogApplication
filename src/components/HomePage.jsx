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
    font-weight: 700px;
    color: #ffffff;
    font-weight: 700;
    @media (min-width: 1200px){
        line-height: 80px;
        font-size: 40px;
    }
    @media (min-width: 1400px){
        font-size: 32px;
        line-height: 40px;
    }
    margin: 0px 50px 12px 50px;
    @media (min-width: 1600px){
        font-size: 44px;
        line-height: 80px;
    }
`
const StyledTitleTwo = styled.p`
    font-size: 21px;
    font-weight: 400;
    line-height: 32px;
    margin: 0px 50px 32px 50px;
    color: #949799;
`

const StyledButtonOne = styled.button`
    margin-left: 50px;
    width: 155px;
    height: 55px;
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
                            <MenuItem>Nosotros</MenuItem>
                        </Link>
                        <Link to='/everyone'>
                            <MenuItem>Ver mas Artículos</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
                <StyledTitleMainP>Information Blog of COVID-19</StyledTitleMainP>
            </StyledMenuDiv>
            <StyledMainImg src='https://i.ibb.co/DMdKmjs/Prueba-Presentacion.png' alt='covid-image' />
            <StyledContainerMainTitle>
                <StyledPTitleOne>Travels</StyledPTitleOne>
                <StyledMainH1>When Is The Best Time of Year To Visit Japan?</StyledMainH1>
                <StyledTitleTwo>The good news for travelers is that there is no single best time of year to travel to Japan...</StyledTitleTwo>
                <StyledButtonOne>Read more</StyledButtonOne>
            </StyledContainerMainTitle>
        </StyledMainDivResponsive>
    )
}

export default HomePage
