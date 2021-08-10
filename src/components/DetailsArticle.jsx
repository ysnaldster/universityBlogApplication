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
    font-size: 20px;
    text-align: justify;
    line-height: 2;
`

const StyledDividerHr = styled.hr`
    background: #DCE4E7;
    margin: 0px 50px;
    padding: 2px 0px;
`

const StyledColSecondaryContent = styled(Col)`
    font-size: 20px;
    text-align: justify;
    line-height: 2;
`
const StyledColCarac1 = styled(Col)`
    margin-top: 20px;
    font-size: 20px;
    text-align: justify;
    line-height: 2;
`
const StyledContainerReferences = styled(Col)`
    margin-top: 15px;
    font-size: 18px;
`

const DetailsArticle = () => {
    const articleActive = useSelector(state => state.articlesActive)
    return (
        <div style={{ background: '#393E46' }}>
            <div className='d-none d-sm-flex' style={{ justifyContent: 'center' }} id='menu'>
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
                {
                    articleActive.active !== undefined &&
                    <StyledMainImg src={articleActive.active.banner} />
                }
                <StyledContainerMainTitle>
                    <StyledPTitleOne>#COVID-19</StyledPTitleOne>
                    <StyledMainH1>{
                        articleActive.active !== undefined && articleActive.active.title
                    }</StyledMainH1>
                    <StyledTitleTwo>
                        {
                            articleActive.active !== undefined && articleActive.active.eslogan
                        }
                    </StyledTitleTwo>
                    <StyledDividerHr />
                </StyledContainerMainTitle>
            </div>
            <StyledContainerMainInfor fluid>
                <StyledRows>
                    <StyledColTitleOne xs={12}>
                        {
                            articleActive.active !== undefined && articleActive.active.content
                        }
                    </StyledColTitleOne>
                </StyledRows>
                <StyledRows>
                    <StyledColSecondaryContent xs={12}>
                        {
                            articleActive.active !== undefined && articleActive.active.content1
                        }
                    </StyledColSecondaryContent>
                    <StyledColCarac1 xs={12}>
                        {
                            articleActive.active.carac1 !== undefined &&
                            <ol>
                                {
                                    articleActive.active.carac1.map(r => {
                                        return (
                                            <li>{r}</li>
                                        )
                                    })
                                }
                            </ol>
                        }
                    </StyledColCarac1>
                    <StyledColCarac1 xs={12}>
                        {
                            articleActive.active !== undefined && articleActive.active.content2
                        }
                    </StyledColCarac1>
                    <StyledColCarac1 xs={12}>
                        {
                            articleActive.active.carac2 !== undefined &&
                            <ol>
                                {
                                    articleActive.active.carac2.map(r => {
                                        return (
                                            <li>{r}</li>
                                        )
                                    })
                                }
                            </ol>
                        }
                    </StyledColCarac1>
                    <StyledColCarac1 xs={12}>
                        {
                            articleActive.active !== undefined && articleActive.active.content3
                        }
                    </StyledColCarac1>
                    <StyledColCarac1 xs={12}>
                        {
                            articleActive.active !== undefined && articleActive.active.content4
                        }
                    </StyledColCarac1>
                    <StyledColCarac1 xs={12}>
                        {
                            articleActive.active.carac3 !== undefined &&
                            <ol>
                                {
                                    articleActive.active.carac3.map(r => {
                                        return (
                                            <li>{r}</li>
                                        )
                                    })
                                }
                            </ol>
                        }
                    </StyledColCarac1>
                    <StyledColCarac1 xs={12}>
                        {
                            articleActive.active !== undefined && articleActive.active.content
                        }
                    </StyledColCarac1>
                </StyledRows>
                <StyledRows>
                    <Col xs={12}>
                    </Col>
                </StyledRows>
                {
                    articleActive.active !== undefined && <StyledImgArticleDetails src={articleActive.active.img2} alt='second-image' />
                }
                <StyledContainerReferences xs={12}>
                    <p style={{ fontSize: '24px', padding: '10px' }}>Referencias</p>
                    {
                        articleActive.active !== undefined &&
                        <ul>
                            {
                                articleActive.active.references.map(r => {
                                    return (
                                        <li>
                                            <a href={r} alt={r}>{r}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </StyledContainerReferences>
            </StyledContainerMainInfor>
            <StyledDivArrowUp>
                <a href='#menu' className='arrowUp'>
                    <AiOutlineArrowUp style={{ color: '#ffffff', fontSize: '40px' }} />
                </a>
            </StyledDivArrowUp>
            <Footer />
        </div>
    )
}

export default DetailsArticle


