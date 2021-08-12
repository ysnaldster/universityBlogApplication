import React  from 'react'
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
const StyledDividerHr = styled.hr`
    background: #DCE4E7;
    margin: 0px 50px;
    padding: 2px 0px;
`
const StyledStart = styled.p`
    padding: 20px 40px;
    text-indent: 2em;
    line-height: 2em;
    text-align: justify;
`
const StyledOneH2 = styled.h2`
    text-align: center;
    padding: 40px 0px;
    font-weight: bold;
    font-size: 26px;
`

const SchoolDescription = () => {
    const schoolArticle = useSelector(state => state.articles.articles)
    return (
        <div style={{ background: '#393E46', fontSize: '22px' }}>
            <div className='d-none d-sm-flex' style={{ justifyContent: 'center' }} id='menu'>
                <StyledMenuDiv>
                    <Menu>
                        <StyledMenuButton>
                            <AiOutlineMenu style={{color: '#ffffff' }} />
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
                </StyledMenuDiv>
                {
                    schoolArticle !== undefined &&
                    <StyledMainImg src={schoolArticle[3].image} alt='covid-image' />
                }
                <StyledContainerMainTitle>
                    <StyledPTitleOne>Institución Educativa</StyledPTitleOne>
                    <StyledMainH1>{
                        schoolArticle !== undefined && schoolArticle[3].title
                    }
                    </StyledMainH1>
                    <StyledTitleTwo>
                        {
                            schoolArticle !== undefined && schoolArticle[3].content
                        }
                    </StyledTitleTwo>
                    <StyledDividerHr />
                </StyledContainerMainTitle>
            </div>
            <StyledContainerMainInfor fluid>
                <StyledRows>
                    <StyledStart xs={12}>
                        La Escuela Nacional Mariano Picón Salas, se encuentra ubicada en la parte alta de la aldea San Rafael de cordero en la localidad de Paramito, Municipio Cárdenas Estado Táchira Venezuela. Donde sus coordenadas son: al norte con la zona montañosa de Guarín, por el sur: con San Rafael parte baja, por el este: con el sector del Junco y con por el oeste con los sectores de la García y Lomas Blancas. Esta escuela se encuentra en una zona montañosa. De igual manera esta escuela se encuentra a una altura de 1.153 msnm. Se maneja una temperatura desde los 17° C hasta los 28° C. Si bien es cierto que en la Escuela Nacional Mariano Picón Salas se impartes clases de desde la educación inicial hasta la primaria, donde se inicia con las edades de 4 años en adelante, posteriormente a los 6 años estos niños pasan al primer grado de primaria la cual siguen sus estudios hasta el sexto grado de primaria.
                    </StyledStart>
                </StyledRows>
                {
                    schoolArticle !== undefined &&
                    <StyledImgArticleDetails src={schoolArticle[3].imagetwo} alt='second-image' />
                }
                <StyledRows>
                    <Col xs={12}>
                        <StyledOneH2>Misión</StyledOneH2>
                        <StyledStart>La  Escuela Nacional Mariano Picón Salas  es una institución  que ofrece sus servicios educativos a niños, niñas y adolescentes en los subsistemas  de educación inicial y primaria, con un personal de excelencia, capacitado, innovador proactivo, emprendedor, responsable, reflexivo, critico, investigador que desarrolle habilidades y destrezas básicas para el logro de experiencias satisfactorias y significativas, tomando en cuenta el proceso evolutivo, necesidades e intereses de nuestros estudiantes e institución bajo un ambiente que logre lograr que los niños y niñas estén abiertos al cambio y comprometidos a su formación integral</StyledStart>
                    </Col>
                </StyledRows>
                {
                    schoolArticle !== undefined &&
                    <StyledImgArticleDetails src={schoolArticle[3].imagefour} alt='second-image' />
                }
                <StyledRows>
                    <StyledOneH2>Visión</StyledOneH2>
                    <StyledStart>La Escuela Nacional Mariano Picón Salas se fija como meta ser un plantel modelado por el trabajo planificado, concentrado y participativo en la que se asume con responsabilidad y compromiso el Proyecto Institucional en un clima organizacional que favorezca el crecimiento humano y cultural en pro de todos sus estudiantes, con el fin de ofrecer, salud, nutrición para niños de nuestra comunidad. Ademas, se unificaran esfuerzos para mejorar la infraestructura de la planta física y las relaciones comunidad escuela y para garantizar el rendimiento escolar: A través de valores se fortalecerá el amor por el estudio, la cooperación, el respeto, la tolerancia y la responsabilidad.
                    </StyledStart>
                </StyledRows>
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

export default SchoolDescription
