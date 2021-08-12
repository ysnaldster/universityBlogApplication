import React from 'react'
import { Container, Col } from 'react-bootstrap'
import styled from 'styled-components'
// Styles

const StyledFontSizeContainer = styled(Container)`
    font-size: 22px;
`
const StyledUlList = styled.ol`
    margin-left: 50px;
`
const StyledOneH2 = styled.h2`
    text-align: center;
    padding: 40px 0px;
    font-weight: bold;
    font-size: 26px;
`
const StyledStrongsLi = styled.li`
    margin-top: 20px;
    margin-left: 50px;
`

const ArtSix = () => {
    return (
        <StyledFontSizeContainer fluid>
            <Col xs={12}>
                <StyledUlList>
                    <p>
                        <StyledOneH2>En primer lugar</StyledOneH2> <br />
                        Lávese las manos con frecuencia con agua y jabón por al menos 20 segundos, especialmente después de haber estado en un lugar público, o después de sonarse la nariz, toser o estornudar. Es de suma importancia que se lave
                    </p>
                    <ul>
                        <StyledStrongsLi>
                            Antes de Comer o preparar la comida
                        </StyledStrongsLi>
                        <StyledStrongsLi>No tocarse la cara</StyledStrongsLi>
                        <StyledStrongsLi>Despues de ir al baño</StyledStrongsLi>
                        <StyledStrongsLi>Despues de salir de lugares públicos</StyledStrongsLi>
                        <StyledStrongsLi>Despues de tocar su cubierta de tela para la cara</StyledStrongsLi>
                        <StyledStrongsLi>Despues de Cuidar a una persona enferma</StyledStrongsLi>
                        <StyledStrongsLi>Luego de tocar animales o mascotas</StyledStrongsLi>
                    </ul>
                    <StyledOneH2>En Segundo lugar</StyledOneH2> <br />
                    Si no dispone de agua y jabón, use un desinfectante de manos que contenga al menos un 60 % de alcohol. Cubra todas las superficies de las manos y frótelas hasta que sienta que se secaron

                    <StyledOneH2>En Tercer lugar</StyledOneH2> <br />
                    Evite tocarse los ojos, la nariz y la boca sin haberse lavado las manos.

                    <StyledOneH2>En Cuarto lugar</StyledOneH2> <br />
                    Limpie y desinfecte diariamente las superficies que se tocan con frecuencia. Esto incluye las mesas, las manijas de las puertas, los interruptores de luz, los mesones, las barandas, los escritorios, los teléfonos y celulares, los teclados, los inodoros, los grifos, los lavamanos y los lavaplatos.
                    Si las superficies están sucias, límpielas. Lávelas con agua y detergente o jabón antes de desinfectarlas. Luego, use un desinfectante de uso doméstico. La mayoría de los desinfectantes comunes para el hogar registrados en la EPA funcionarán. (seguir recomendaciones del procedimiento de limpieza y desinfección de nuestra Facultad).
                </StyledUlList>
            </Col>
        </StyledFontSizeContainer>
    )
}

export default ArtSix
