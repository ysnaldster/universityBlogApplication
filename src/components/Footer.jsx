import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillHeart } from 'react-icons/ai'

// Styles
const StyledMainContainerFooter = styled(Container)`
    height: 130px;
    background-color: #000000;
    padding: 20px 0px;
    /* position: absolute;
    bottom: 0px; */
`
const StyledTtitleBlog = styled(Row)`
    font-size: 28px;
    color: #ffffff;
    font-weight: 700;
    padding: 0px 20px 0px 150px;
`

const StyledRowCopyright = styled(Row)`
    font-size: 16px;
    padding: 0px 180px;
    color: #ffffff;
`

const StyledDivLove = styled.div`
    display: flex; 
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
`
const StyledColNames = styled(Col)`
    color: #ffffff;
    background-color: #000000;
    padding-top: 30px;
`
const StyledUlist = styled.ul`
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
`

const Footer = () => {
    return (
        <StyledMainContainerFooter fluid>
            <Row>
                <Col xs={6}>
                    <StyledTtitleBlog>Information Blog of COVID-19</StyledTtitleBlog>
                    <StyledRowCopyright>Copyrights 2021. All Rights Reserved</StyledRowCopyright>
                </Col>
                <StyledColNames xs={3}>
                    <StyledDivLove>Hecho con el <AiFillHeart style = {{margin: '0px 10px', fontSize: '30px'}}/>de:</StyledDivLove>
                </StyledColNames>
                <Col xs={3}>
                    <StyledUlist>
                        <li>Ysnaldo J. López H.</li>
                        <li>José F. Hernández A.</li>
                        <li>Oscar E. Gandica P.</li>
                    </StyledUlist>
                </Col>
            </Row>
        </StyledMainContainerFooter>
    )
}

export default Footer


