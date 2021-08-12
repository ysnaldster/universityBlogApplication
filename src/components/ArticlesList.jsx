import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import { articleActive } from '../actions/articlesAction'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
import MainInformation from './MainInformation'
import styled from 'styled-components'
import DescripSchool from './DescripSchool'
import Footer from './Footer'
import {BsBook} from 'react-icons/bs'
import {TiPencil} from 'react-icons/ti'
import {HiHome} from 'react-icons/hi'
import {AiFillSafetyCertificate} from 'react-icons/ai'
const StyledContainerMainArticles = styled(Container)`
    display: flex;
`

const StyledSecondMainContainer = styled(Container)`
    margin: 30px 30px 30px 140px;
    display: flex;
`
const StyledImgArticle = styled.img`
    width: 350px;
    @media (min-width: 1200px){
        height: 400px;
    }
    @media (min-width: 1400px){
        height: 350px;       
    }
`
const StyledDivSchool = styled.div`
    @media (min-width: 1200px){
        padding-top: 61px;
    }
    @media (min-width: 1400px){
        padding-top: 50px;
    }
`
const StyledDivContent = styled.div`
    width: 45%;
    margin-left: 15px;
`

const StyledCardContainer = styled(Card)`
    height: 100%;
    @media (min-width: 1200px){
        width: 80%;
    }
    @media (min-width: 1400px){
        width: 100%;
    }
    @media (min-width: 1600px){
        width: 120%;
    }
`

const StyledCardTitleStyd = styled.div`
    font-weight: 700;
    @media (min-width: 1200px){
        font-size: 28px;
        line-height: 40px;

    }
    @media (min-width: 1400px){
        font-size: 32px; 
        line-height: 50px;
    }
`
const StyledSecondPContent = styled.div`
    margin-top: 20px;
    @media (min-width: 1200px){
        font-size: 16px;
    }
    @media (min-width: 1400px){
        font-size: 18px;
    }

`
const StyledRowContainerFollows = styled(Row)`
    padding: 0px 30px;
    display: flex;
    justify-content: center;
    position: relative;
    @media (min-width: 1200px){
        top: 20px;
    }
    @media (min-width: 1400px){
        top: 30px;
    }
`

const StyledColsFollowFIYG = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    margin-right: 10px;
    @media (min-width: 1200px){
        width: 42px;
        height: 42px;
    }
    @media (min-width: 1400px){
        width: 62px;
        height: 62px;
    }
`

const StyledFinishedFollowG = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    @media (min-width: 1200px){
        width: 42px;
        height: 42px;
    }
    @media (min-width: 1400px){
        width: 62px;
        height: 62px;
    }
`

const StyledImgAside = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 90px;
`

const StyledColMainAside = styled(Col)`
    padding-right: 140px;
    display: flex;
    flex-direction: column;
    background: #393E46;
    padding-top: 30px;
`
const StyledDivImgAside = styled.div`
    margin-top: 30px;
    display: flex; 
    justify-content: center;
`

const StyledPTitleMainAside = styled.p`
    margin-top: 30px;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    color: #ffffff;
    margin: 29px;
`

const StyledPTitleContentAside = styled.p`
    color: #949799;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    padding: 0px 30px;
`

const StyledDivSecondaryAside = styled.div`
    border: 1px solid #ffffff;
`

const StyledInformationFollowMe = styled.div`
    text-align: center;
    color: #ffffff;
    font-weight: 700;
    margin-top: 30px;
`
const StyledButtonOtherArticles = styled.div`
    display: flex; 
    justify-content: center;
`

const StyledButtonReadMoreArticles = styled(Button)`
    padding: 10px 200px;
    margin: 30px;
    font-size: 18px;
`

const ArticlesList = () => {
    const { articles } = useSelector(state => state.articles)
    const dispatch = useDispatch()
    const handleClickArticle = (article) => {
        dispatch(articleActive(article.id, { ...article }))
    }
    return (
        <div>
            <HomePage />
            <MainInformation cont1='203.205.809' cont2='4.300.070' desp1='Casos Confirmados en el Mundo' desp2='Muertes a nivel Mundial' secondc1='Casos' location='4.445' secondc2='Vacunados' type='1.100.000' secondc3='Muertes en Venezuela' range='3,705' />
            <StyledContainerMainArticles fluid className='pe-0 ps-0'>
                <Col xs={8} style={{ background: '#393E46' }}>
                    {
                        articles !== undefined && articles.map(article => {
                            if (article.id === 'one' || article.id === 'two' || article.id === 'three'){
                                return (
                                    <StyledSecondMainContainer fluid key={article.id} className='pe-0 ps-0'>
                                        <div>
                                            <StyledImgArticle src= {article.img1} />
                                        </div>
                                        <StyledDivContent>
                                            <StyledCardContainer>
                                                <Card.Body>
                                                    <div style={{ display: 'flex' }}>
                                                        <p style={{ marginRight: '20px' }}>#COVID-19</p>
                                                        <p>{article.time}</p>
                                                    </div>
                                                    <StyledCardTitleStyd>{article.title}</StyledCardTitleStyd>
                                                    <StyledSecondPContent>
                                                        {article.content.substring(0, 160)}...
                                                    </StyledSecondPContent>
                                                    <Link to={`/details/${article.id}`}>
                                                        <Button variant="dark" onClick={() => handleClickArticle(article)} style={{ marginTop: '20px' }}>
                                                            Leer mas..</Button>
                                                    </Link>
                                                </Card.Body>
                                            </StyledCardContainer>
                                        </StyledDivContent>
                                    </StyledSecondMainContainer>
                                ) 
                            } else {
                                return null;
                            }
                        })
                    }
                    <StyledButtonOtherArticles>
                        <Link to='everyone'>
                            <StyledButtonReadMoreArticles variant="secondary">Leer mas artículos</StyledButtonReadMoreArticles>
                        </Link>
                    </StyledButtonOtherArticles>
                </Col>
                <StyledColMainAside>
                    <StyledDivSecondaryAside>
                        <StyledDivImgAside>
                            <StyledImgAside src='https://i.ibb.co/djgxV3T/Logo-Escuela-Modificado.png' />
                        </StyledDivImgAside>
                        <StyledPTitleMainAside>Escuela Mariano Picón Salas</StyledPTitleMainAside>
                        <StyledPTitleContentAside>
                            Institución Educativa encargada de la formación de jovenes en las etapas de preescolar y primaria, a fines de que adquieran los conocimientos para ser las generaciones venideras y trifunfales del futuro. 
                        </StyledPTitleContentAside>
                        <StyledInformationFollowMe>
                           Una educación, es sin duda, un regalo para toda la vida 
                        </StyledInformationFollowMe>
                        <Container fluid className='ps-0 pe-0'>
                            <StyledRowContainerFollows>
                                <StyledColsFollowFIYG xs={3} className='ps-0 pe-0'>
                                    <BsBook style={{ fontSize: '30px' }} />
                                </StyledColsFollowFIYG>
                                <StyledColsFollowFIYG xs={3} className='ps-0 pe-0'>
                                    <TiPencil style={{ fontSize: '30px' }} />
                                </StyledColsFollowFIYG>
                                <StyledColsFollowFIYG xs={3} className='ps-0 pe-0'>
                                    <HiHome style={{ fontSize: '30px' }} />
                                </StyledColsFollowFIYG>
                                <StyledFinishedFollowG xs={3} className='ps-0 pe-0'>
                                    <AiFillSafetyCertificate style={{ fontSize: '30px' }} />
                                </StyledFinishedFollowG>
                            </StyledRowContainerFollows>
                        </Container>
                    </StyledDivSecondaryAside>
                    <StyledDivSchool>
                        <DescripSchool />
                    </StyledDivSchool>
                </StyledColMainAside>
            </StyledContainerMainArticles>
            <Footer />
        </div>
    )
}
export default ArticlesList



