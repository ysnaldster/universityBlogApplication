import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

// Styles 
const StyledFontSizeContainerTwoArt = styled(Container)`
    font-size: 22px;
`
const StyledColOne = styled(Col)`
    padding: 20px 40px;
    text-indent: 2em;
`
const StyledOneH2 = styled.h2`
    padding: 40px 0px;
    font-weight: bold;
    font-size: 26px;
`
const ArtTwo = () => {
    return (
        <StyledFontSizeContainerTwoArt fluid>
            <Row>
                <StyledColOne xs={12}>
                    El covid-19 se originó el 31 de diciembre de 2019, en la cual la Organización Mundial de la Salud (OMS) recibió reportes de su presencia de neumonía, de origen desconocido, en la ciudad de Wuhan, en China. Donde rápidamente, a principios de enero, las autoridades de este país identificaron la causa como una nueva cepa de coronavirus. Teniendo en cuenta que esta enfermedad ha ido expandiéndose hacia otros continentes rápidamente como Asia, Europa y América. Considerando que este virus ha ido evolucionando en el transcurso del tiempo de la cual se mencioann los siguientes
                </StyledColOne>
                <Col xs={12}>
                    <ul style = {{textIndent: '2em'}}>
                        <li>
                            <StyledOneH2>Variante alfa (B.1.1.7)</StyledOneH2>
                            <p>
                                Las primeras muestras documentadas por la OMS datan de septiembre de 2020 en Reino Unido, y desde hace varios meses es dominante en la mayor parte de los países europeos y en algunas otras localizaciones como Estados Unidos o Israel. Destaca por su rápido aumento a nivel global. Es muy transmisible, posiblemente más letal, aunque no parece que escape a la inmunidad.
                            </p>
                            <p>
                                Durante la semana 24 (del 14 al 20 de junio) en todas las Comunidades Autónomas se identifica mediante marcador SGTF o PCR específica en la mayoría de los casos, con un rango entre el 46,7% y el 100% entre las diferentes comunidades. Además, se aprecia un descenso respecto a semanas previas en varias de ellas.
                            </p>
                        </li>
                        <li>
                            <StyledOneH2>Variante beta (B.1.351)</StyledOneH2>
                            <p>
                                Es una variante predominante en Sudáfrica y países vecinos. En cambio, en Europa representa un porcentaje pequeño de los casos con una prevalencia algo más elevada en algunos departamentos de Francia. Se designó el 18 diciembre de 2020. Es probablemente más transmisible y presenta posibilidad de escape a la respuesta inmune adquirida tras la infección natural o la generada por algunas vacunas. Es decir, podría haber una reducción de efectividad de algunas de las vacunas frente al virus
                            </p>
                        </li>
                        <li>
                            <StyledOneH2>
                                Variante gamma (P1)
                            </StyledOneH2>
                            <p>
                                Predominante en América del Sur, especialmente en Brasil. Presente en numerosos países europeos, aunque con baja frecuencia. Algo mayor (mayor a 10%) en algunas regiones de Italia. Posible aumento de la transmisibilidad y escape moderado a la respuesta inmune.
                            </p>
                        </li>
                        <li>
                            <StyledOneH2>Variante delta (B.1.617.2)</StyledOneH2>
                            <p>Designada como VOI el 4 abril 2021 pasó a ser VOC desde el pasado 11 de mayo. Es mayoritaria en la India y Reino Unido. Un 60% más transmisible que la alfa, que a su vez era un 50% más contagiosa que la cepa original china. Esta variante fue encontrada por primer vez el pasado mes de abril y las autoridades de la India han sido las primeras en hablar de ella</p>
                            <p>
                                Además, la OMS advirtió el 24 de junio de que la llamada variante 'delta plus' tiene una mutación adicional a la que presenta la delta original y podría tener un impacto en la capacidad de los anticuerpos para acabar con el virus.
                            </p>
                            <p>
                                Los síntomas de la versión delta son diferentes a los habituales de la covid original, provoca más mucosidad y dolor de garganta, pero menos tos y pérdida de olfato. Leve disminución de la efectividad vacunal, todavía más marcada con la vacunación incompleta
                            </p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </StyledFontSizeContainerTwoArt>
    )
}

export default ArtTwo
