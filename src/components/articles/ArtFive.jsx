import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

// Styles
const StyledStart = styled.p`
    padding: 20px 40px;
    text-indent: 2em;
`
const StyledCols = styled(Col)`
    padding: 20px 40px;
    text-indent: 2em;
`

const StyledFontSizeContainer = styled(Container)`
    font-size: 22px;
`
const StyledUlList = styled.ul`
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
`
const ArtFive = () => {
    return (
        <StyledFontSizeContainer fluid>
            <StyledOneH2 >Pasos a seguir para la Prevención del Covid 19</StyledOneH2>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/X34iZwv_hEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Row>
                <StyledCols xs={12}>
                    Hay varias medidas y requisitos que deberían revisarse y ponerse en práctica para prevenir la introducción y la propagación de la COVID-19 en las escuelas y la comunidad, y garantizar la seguridad de los niños y del personal esStyledColsar mientras estén en la escuela. Deben estudiarse disposiciones especiales para el desarrollo en la primera infancia, los centros de enseñanza superior, los internados y las instituciones especializadas.
                </StyledCols>
                <Col xs={12}>
                    <StyledOneH2>La OMS recomienda lo siguiente</StyledOneH2>
                    <ul>
                        <StyledStrongsLi>
                            <strong>Medidas a nivel comunitario</strong> <br/>
                            Detección temprana, realización de pruebas y rastreo y cuarentena de los contactos; investigación de conglomerados; distanciamiento físico, medidas de higiene de manos y personal y uso de mascarillas adaptado a la edad, y protección de los grupos vulnerables. Las iniciativas comunitarias destinadas por ejemplo a corregir los falsos rumores también contribuyen de forma fundamental a reducir el riesgo de infección.</StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong>Políticas, prácticas e infraestructura</strong> <br/>
                            Velar por que se disponga de los recursos, las políticas y la infraestructura necesarios para proteger la salud y la seguridad de todo el personal de la escuela, incluidas las personas que corren mayor riesgo.</StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong>Aspectos comportamentales</strong> <br/>
                            Tener en cuenta la edad y la capacidad de los estudiantes para comprender y respetar las medidas aplicadas. Es posible que a los niños más pequeños les resulte más difícil respetar el distanciamiento físico o el uso adecuado de las mascarillas. </StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong>Protección y seguridad</strong> <br/>
                            El cierre y la reapertura de las escuelas puede afectar a la protección y la seguridad de los alumnos y es probable que sea necesario prestar especial atención a los niños más vulnerables, por ejemplo, en el momento de recogerlos y dejarlos en la escuela.</StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong> Higiene y prácticas diarias en la escuela y las aulas</strong> <br/>
                           Distanciamiento físico mínimo de un metro y distanciamiento de los pupitres, higiene de manos y respiratoria frecuente, uso de mascarillas adaptado a la edad y medidas de ventilación y de limpieza del entorno para limitar la exposición. Las escuelas deben formar al personal y a los estudiantes sobre las medidas de prevención de la Covid 19, establecer un calendario para la limpieza y desinfección diarias del entorno escolar, las instalaciones y las superficies que se tocan frecuentemente, disponer puntos de higiene de manos y seguir las orientaciones nacionales y locales sobre el uso de mascarillas.</StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong>Detección y asistencia a los estudiantes, profesores y otros trabajadores de la escuela que estén enfermos</strong> <br/>
                            Las escuelas deben aplicar la política de «quédese en casa cuando no se encuentre bien», dispensar del requisito de presentar un certificado médico para justificar las ausencias, crear una lista de verificación para que los padres, los alumnos o el personal decidan si pueden ir a la escuela (teniendo en cuenta la situación local), asegurarse de que los estudiantes que han estado en contacto con un caso de Covid 19 se quedan en casa durante 14 días y plantearse la realización de pruebas de detección en la entrada</StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong> Protección de las personas de alto riesgo</strong> <br/>
                           Las escuelas deben identificar a los estudiantes y los profesores con un gran riesgo que ya padecían una enfermedad para elaborar estrategias con el fin de velar por la seguridad de dichas personas; mantener el distanciamiento físico y el uso de las mascarillas quirúrgicas, así como una higiene de manos frecuente y precauciones al toser y estornudar</StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong>Comunicación con los padres y los alumnos</strong> <br/>
                            Las escuelas deben mantener informados a los estudiantes y a los padres sobre las medidas que están aplicando para garantizar su colaboración y apoyo.</StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong>Medidas adicionales para las escuelas, como los controles de inmunización y los programas para ponerse al día de las vacunas pendientes</strong> <br/>
                            Se debe garantizar la continuidad o la ampliación de los servicios esenciales, incluida la alimentación y los servicios de salud mental y apoyo psicosocial en los centros educativos.</StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong> Distanciamiento físico fuera de las aulas</strong> <br/>
                           Mantener una distancia de al menos un metro entre los estudiantes (todos los grupos de edad) y el personal, siempre que sea posible</StyledStrongsLi>
                        <StyledStrongsLi>
                            <ul>
                                <StyledStrongsLi>
                                    <strong>Distanciamiento físico dentro de las aulas</strong> <br/>
                                     En las zonas con una situación de transmisión comunitaria de la Covid 19, mantener una distancia de al menos un metro entre todas las personas de todos los grupos de edad en las escuelas que permanezcan abiertas. Con ese fin, se debe aumentar la distancia entre los pupitres y escalonar los recreos o descansos y las pausas para el almuerzo; limitar la interacción entre los alumnos de distintas clases y grupos de edad; plantearse reducir el número de alumnos por clase, o instaurar horarios alternos y garantizar la adecuada ventilación en las aulas</StyledStrongsLi>
                                <StyledStrongsLi style = {{marginLeft: '50px', marginTop: '20px'}}>
                                    En las areas donde la situación de transmisión por conglomerados de la COVID-19 se debe aplicar un enfoque basado en los riesgos para decidir si conviene mantener una distancia de al menos un metro entre los estudiantes. El personal debe mantener en todo momento una distancia de al menos un metro entre sí y con los estudiantes y deberá llevar mascarilla cuando la distancia de un metro no resulte práctica
                                </StyledStrongsLi>
                                <StyledStrongsLi style = {{marginLeft: '50px', marginTop: '20px'}}>
                                    En los sectores con casos esporádicos o sin casos de COVID-19, los niños menores de 12 años no deben estar obligados a mantener la distancia física en todo momento. Siempre que sea posible, los niños a partir de los 12 años deben mantener una distancia de al menos un metro entre sí.  El personal debe mantener en todo momento una distancia de al menos un metro entre sí y con los estudiantes, y deberá llevar mascarilla cuando la distancia de un metro no resulte práctica.
                                </StyledStrongsLi>
                            </ul>
                        </StyledStrongsLi>
                        <StyledStrongsLi>
                            <strong> Aprendizaje a distancia</strong> <br/>
                           Cuando los niños no puedan asistir a clase en persona, se debe facilitar que los estudiantes sigan accediendo a las tecnologías y los materiales didácticos (Internet, envío de mensajes, radio y televisión), por ejemplo, por cuanto respecta a la entrega de deberes y la retransmisión de las clases. El cierre de los establecimientos educativos únicamente debe contemplarse si no existen otras alternativas
                        </StyledStrongsLi>
                    </ul>
                </Col>
                <Col xs={12}>
                    <StyledOneH2>¿Qué elementos deben controlarse tras la reapertura de la escuela?</StyledOneH2>
                    <StyledStart>Se debe controlar lo siguiente:</StyledStart>
                    <StyledUlList>
                        <li>La eficacia de las actividades de notificación de síntomas, vigilancia, pruebas rápidas y rastreo de posibles casos</li>
                        <li>Los efectos de las políticas y las medidas en los objetivos educativos y los resultados de aprendizaje</li>
                        <li>Las medidas en la salud y el bienestar de los niños, los hermanos, el personal, los padres y otros familiares</li>
                        <li>La tendencia del abandono escolar después de levantar las restricciones</li>
                        <li>El número de casos entre los niños y el personal, y la frecuencia de los brotes en las escuelas a nivel local y nacional</li>
                        <li>El número de casos entre los niños y el personal, y la frecuencia de los brotes en las escuelas a nivel local y nacional</li>
                    </StyledUlList>
                    <StyledStart>
                        En función de las conclusiones de esta vigilancia, deben hacerse nuevas modificaciones para seguir proporcionando a los niños y al personal el entorno más seguro posible
                    </StyledStart>
                </Col>
            </Row>
        </StyledFontSizeContainer>
    )
}

export default ArtFive
