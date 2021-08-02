import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react"
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import Footer from './Footer'
import { AiOutlineArrowUp } from 'react-icons/ai'
// Styles 

const StyledMainImg = styled.img`
    width: 100vw;
    height: 100vh;
`

const StyledContainerMainTitle = styled.div`
    position: absolute;
    height: 30vh;
    top: 70vh;
    background-color: #393E46;
    width: 80%;
`
const StyledMenuDiv = styled.div`
    display: flex;
    position: absolute;
    left: 140px;
    top: 40px;
`

const StyledMenuButton = styled(MenuButton)`
    border: none; 
    background: #6d6d6d;
    padding: 20px;
    border-radius: 500px;

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
const StyledDivArrowUp = styled.div`
    display: inline-block;
    background: #6d6d6d;
    padding: 20px;
    border-radius: 500px;
    left: 80%;
    position: relative;
    bottom: 20px;
`
const StyledContainerMainInfor = styled(Container)`
    display: flex; 
    justify-content: center;
    width: 80%;
    flex-direction: column;
    background-color: #393E46;
    color: #ffffff;
`

const StyledImgArticleDetails = styled.img`
    height: 500px;
    margin: 0px 50px;
`

const StyledRows = styled(Row)`
    margin: 30px 100px;

`

const StyledColTitleOne = styled(Col)`
    font-size: 32px;
`

const StyledDividerHr = styled.hr`
    background: #DCE4E7;
    margin: 0px 50px;
    padding: 2px 0px;
`

const DetailsArticle = () => {
    const articleActive = useSelector(state => state.articlesActive)
    return (
        <div style={{ background: '#393E46' }}>
            <div className='d-none d-sm-flex' style={{ justifyContent: 'center' }} id = 'menu'>
                    <StyledMenuDiv>
                        <Menu>
                            <StyledMenuButton>
                                <AiOutlineMenu style={{ fontSize: '25px', color: '#ffffff' }} />
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
                    </StyledMenuDiv>
                <StyledMainImg src='https://i.ibb.co/8cFg65C/coronavirus-4914026-1920.jpg' alt='covid-image' />
                <StyledContainerMainTitle>
                    <StyledPTitleOne>Travels</StyledPTitleOne>
                    <StyledMainH1>{
                    articleActive.active !== undefined && articleActive.active.title
                    }</StyledMainH1>
                    <StyledTitleTwo>The good news for travelers is that there is no single best time of year to travel to Japan...</StyledTitleTwo>
                    <StyledDividerHr />
                </StyledContainerMainTitle>
            </div>
            <StyledContainerMainInfor fluid>
                <StyledRows>
                    <StyledColTitleOne xs={12}>
                        The good news for travelers is that there is no single best time of year to travel to Japan — yet this makes it difficult to decide when to visit, as each of Japan’s seasons has its own special highlights.
                    </StyledColTitleOne>
                </StyledRows>
                <StyledRows>
                    <Col xs={12}>
                        Japan is truly a year-round destination, and Japanese culture is remarkable in its profound appreciation of the changing of the seasons. As you’ll see when you visit, each season — and even sub-season! — is celebrated with seasonal foods, and often matsuri (festivals). Because of this, we typically recommend taking advantage of any chance to visit Japan.
                        On the other hand, if your dates are flexible it’s worth thinking about which time of year you might enjoy most. After all, some travelers hate the cold — or the heat and humidity of summer — while others will do whatever it takes to avoid crowds! (When planning a trip to Japan, a key question to ask yourself is: would you rather have better weather, or fewer tourists around?)
                        Because there is so much to consider, we’ve put together this comprehensive guide on the best time to travel to Japan, including information on the seasons, weather, national holidays to look out for, and more.
                    </Col>
                </StyledRows>
                <StyledImgArticleDetails src='https://i.ibb.co/8cFg65C/coronavirus-4914026-1920.jpg' alt='second-image' />
                <StyledRows>
                    <Col xs={12}>
                        Japan is truly a year-round destination, and Japanese culture is remarkable in its profound appreciation of the changing of the seasons. As you’ll see when you visit, each season — and even sub-season! — is celebrated with seasonal foods, and often matsuri (festivals). Because of this, we typically recommend taking advantage of any chance to visit Japan.
                        On the other hand, if your dates are flexible it’s worth thinking about which time of year you might enjoy most. After all, some travelers hate the cold — or the heat and humidity of summer — while others will do whatever it takes to avoid crowds! (When planning a trip to Japan, a key question to ask yourself is: would you rather have better weather, or fewer tourists around?)
                        Because there is so much to consider, we’ve put together this comprehensive guide on the best time to travel to Japan, including information on the seasons, weather, national holidays to look out for, and more.
                    </Col>
                </StyledRows>
            </StyledContainerMainInfor>
            <StyledDivArrowUp>
                <a href='#menu'className = 'arrowUp'>
                    <AiOutlineArrowUp style={{ color: '#ffffff', fontSize: '40px' }} />
                </a>
            </StyledDivArrowUp>
            <Footer />
        </div>
    )
}

export default DetailsArticle


