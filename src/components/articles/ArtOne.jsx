import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

// Styles
const StyledColOne = styled(Col)`
    padding: 20px 40px;
    text-indent: 2em;
`
const StyledColTwo = styled(Col)`
    padding: 20px;
`

const StyledUlOne = styled.ul`
    margin-left: 50px;
    padding: 20px 0px;
`

const StyledFontSizeContainer = styled(Container)`
font-size: 22px;
`

const StyledOneH2 = styled.h2`
    text-align: center;
    padding: 40px 0px;
    font-weight: bold;
    font-size: 26px;
`

const StyledSecondsLi = styled.li`
    margin-left: 50px;
`

const StyledImgOne = styled.img`
    width: 100%; 
`

const StyledDivOne = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;
`
const ArtOne = () => {
    return (
        <StyledFontSizeContainer fluid>
            <div>
                <StyledOneH2>¿Que es el Coronavirus?</StyledOneH2>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/69-C4XRHtt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Row>
                <StyledOneH2>Las Mascarillas</StyledOneH2>
                <StyledColOne xs={12}>
                    Según OMS. Las mascarillas médicas se deben reservar para los profesionales de la salud. El uso de mascarillas médicas en un entorno comunitario podría crear una falsa sensación de seguridad que, potencialmente, derivaría en una menor aplicación de otras medidas esenciales, como la higiene de las manos y el distanciamiento físico. Además, algunas personas se tocan la cara por debajo de las mascarillas o de los ojos. Este uso generalizado ocasionaría costos innecesarios y podría impedir que estas mascarillas estuvieran disponibles para los profesionales de la salud, que son quienes más las necesitan, sobre todo cuando su suministro escasea. Las personas que presentan síntomas deben seguir las siguientes recomendaciones:
                </StyledColOne>
                <StyledColTwo xs={12}>
                    <ul>
                        <li>Ponerse una mascarilla médica, aislarse y procurar atención sanitaria en cuanto se sientan mal. Los síntomas de la Covid 19 pueden ser: fiebre, cansancio, tos, dolor de garganta y dificultades para respirar. Es importante recordar que, en algunas personas, los primeros síntomas son leves como son los siguientes:
                        </li>
                        <StyledUlOne>
                            <li>Seguir las instrucciones sobre el modo de ponerse, quitarse y eliminar las mascarillas médicas</li>
                            <li>Aplicar las demás medidas profilácticas, sobre todo la higiene de las manos y el distanciamiento físico con otras personas</li>
                        </StyledUlOne>
                    </ul>
                </StyledColTwo>
                <Col xs={12} style={{ textIndent: '2em' }}>
                    Como se expone en el segmento anterior las mascarillas están diseñadas para proteger la cara contra partículas, salpicaduras u otros cuerpos extraños. Por ende, para el Covid 19 se recomienda mascarillas quirúrgicas o mascarilla KN95, este tipo de masacrilla se recomienda ya que proporciona una barrera de contención primaria contra agentes infecciosos. Tomando en consideración que muchas personas se hacen la pregunta sí.
                </Col>
                <Col xs={12}>
                    <StyledOneH2>¿Los niños y adolescentes deben usar tapabocas?</StyledOneH2>
                    <ul>
                        <li><strong>Hasta los 5 años:</strong> no es obligatorio, considerando la seguridad y el interés general del niño, y dada su incapacidad de utilizar adecuadamente el tapabocas con una asistencia mínima.</li>
                        <li><strong>Entre los 6 y los 11 años:</strong> su uso depende de varios factores
                        </li>
                        <ul>
                            <StyledSecondsLi>Si hay transmisión generalizada en el área donde reside el niño o niña</StyledSecondsLi>
                            <StyledSecondsLi>La capacidad del niño para utilizar el tapabocas de forma segura y adecuada</StyledSecondsLi>
                            <StyledSecondsLi>La supervisión adecuada de un adulto</StyledSecondsLi>
                            <StyledSecondsLi>Las posibles repercusiones de llevar puesto un tapabocas sobre el aprendizaje y el desarrollo psicosocial, en consulta con los docentes, sus familias, cuidadores y el personal de la salud</StyledSecondsLi>
                            <StyledSecondsLi>Los entornos e interacciones específicos del niño con otras personas que corren un alto riesgo de sufrir una manifestación grave de la enfermedad, como las personas mayores y las que tienen otras afecciones de salud</StyledSecondsLi>
                        </ul>
                        <li>
                            <strong>A partir de los 12 años: </strong>
                            Se recomienda el uso de tapabocas, en las mismas circunstancias que los adultos, en particular cuando no se pueda garantizar el distanciamiento físico.
                        </li>
                    </ul>
                </Col>
                <Col xs={12}>
                    <StyledOneH2>Cómo Elegir la Mascarilla</StyledOneH2>
                    <p>Al elegir una mascarilla, hay varias opciones. A continuación, se presentan algunos consejos sobre las que debe elegir y las que no debe elegir.</p>
                    <StyledDivOne style={{ display: 'flex', justifyContent: 'center' }}>
                        <StyledImgOne src='https://i.ibb.co/nRC49h2/Art1-2.png' />
                    </StyledDivOne>
                </Col>
            </Row>
        </StyledFontSizeContainer>
    )
}

export default ArtOne

