import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

// Styles 
const StyledMainPhoto = styled.img`
    width: 500px;
    height: 500px;
    margin-left: 140px;
    padding-top: 40px;
`

const StyledMainDiv = styled.div`
    background-color: #393E46;
    padding-bottom: 50px;
    padding-top: 90px;
`

const StyledDivInformation = styled.div`
    @media (min-width: 1200px){
        width: 700px;
    }
    @media (min-width: 1400px){
        width: 800px;
    }
    @media (min-width: 1600px){
        width: 1200px;
    }
    color: #000000;
    background: #ffffff;
    height: 200px;
    position: absolute;
    left: 500px;
    margin-top: 60px;
`
const StyledDivSecondInformation = styled.div`
    color: #ffffff;
    position: absolute;
    display: flex;
    margin-top: 280px;
    @media (min-width: 1200px){
        left: 650px; 
    }
    @media (min-width: 1400px){
        left: 700px;
    }
    @media (min-width: 1600px){
        left: 900px;
    }
`

const StyledContainerGrid = styled(Container)`
    box-shadow: 0px 2px 10px #faf8f7;
   @media (min-width: 1200px){
        width: 900px;
    }
    @media (min-width: 1400px){
        width: 1000px;
    }
    @media (min-width: 1600px){
        width: 1400px;
        left: 380px;
    }
    position: absolute;
    left: 300px;
    color: #000000;
    margin-top: 400px;
    background-color: #ffffff;
    width: 900px;
    height: 80px;
`

const StyledMainTitlePContainer = styled.p`
    font-size: 34px;
    padding: 15px 20px 0px 20px;
    font-weight: 700;
`
const StyledPDescription = styled.p`
    margin: 10px 0px 10px 20px;
    color: #949799;
    font-size: 21px;
`

const StyledTitlesGrid = styled.p`
    font-size: 30px;
    font-weight: 700;
    padding: 10px 10px;
    text-align: center;
`
const StyledDescriptionsGrid = styled.p`
    padding: 0px 25px;
    font-size: 18px;
    font-weight: 600; 
`

const StyledRowsContent = styled(Row)`
    padding-top: 5px;
    padding-left: 300px;
`

const StyledColsContent = styled(Col)`
    background: #e3e6e9;
    text-align: center;
    height: 20%;
    width: 25%;
    padding: 5px;
    @media (min-width: 1200px){
        margin: 0px 20px;
    }
    @media (min-width: 1400px){
        margin: 0px 30px;
    }
`

const StyledButtonSideContainer = styled.button`
    position: absolute;
    left: 20px;
    top: 20px;
    background: #e6dcd7;
    padding: 10px 45px;
`

const StyledColsGridUp = styled(Col)`
    text-align: center;
`

const MainInformation = ({ cont1, cont2, desp1, desp2, secondc1, secondc2, secondc3, location, type, range }) => {
    return (
        <StyledMainDiv>
            <StyledDivInformation>
                <StyledMainTitlePContainer>Situación a Nivel Mundial en Temática del Covid 19</StyledMainTitlePContainer>
                <StyledPDescription>Ministerio de Salud y Proteccion Social - Instituto Nacional de Salud</StyledPDescription>
            </StyledDivInformation>
            <StyledDivSecondInformation>
                <div>
                    <StyledTitlesGrid>{cont1}</StyledTitlesGrid>
                    <StyledDescriptionsGrid>{desp1}</StyledDescriptionsGrid>
                </div>
                <div>
                    <StyledTitlesGrid>{cont2}</StyledTitlesGrid>
                    <StyledDescriptionsGrid>{desp2}</StyledDescriptionsGrid>
                </div>
            </StyledDivSecondInformation>
            <StyledContainerGrid className='ms-0 me-0 ps-0 pe-0'>
                <StyledRowsContent>
                    <StyledColsGridUp xs={3}>
                        {secondc1}
                    </StyledColsGridUp>
                    <StyledColsGridUp xs={3}>
                        {secondc2}
                    </StyledColsGridUp>
                    <StyledColsGridUp xs={6}>
                        {secondc3}
                    </StyledColsGridUp>
                </StyledRowsContent>
                <StyledRowsContent>
                    <div>
                        <StyledButtonSideContainer>Estado Tachira</StyledButtonSideContainer>
                    </div>
                    <StyledColsContent xs={2}>
                        {location}
                    </StyledColsContent>
                    <StyledColsContent xs={2}>
                        {type}
                    </StyledColsContent>
                    <StyledColsContent xs={2}>
                        {range}
                    </StyledColsContent>
                </StyledRowsContent>
            </StyledContainerGrid>
            <StyledMainPhoto src='https://i.ibb.co/HBsCqbp/Children-COVID-Two.png' alt='children-covid' />
        </StyledMainDiv>
    )
}

export default MainInformation

