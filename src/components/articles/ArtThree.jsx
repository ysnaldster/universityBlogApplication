import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

// Styles
const StyledStartP = styled.p`
    padding: 20px 40px;
    text-indent: 2em;
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
const StyledOneH3 = styled.h3`
    text-align: center;
    padding: 40px 0px;
    font-weight: bold;
    font-size: 24px;
`
const StyledUlList = styled.ul`
    margin-left: 50px;
`

const ArtThree = () => {
    return (
        <StyledFontSizeContainer fluid>
            <Row>
                <Col xs={12}>
                    <StyledOneH2>¿Qué es la vacunación?</StyledOneH2>
                    <StyledStartP>La vacunación es una forma sencilla, inocua y eficaz de protegernos contra enfermedades dañinas antes de entrar en contacto con ellas. Las vacunas activan las defensas naturales del organismo para que aprendan a resistir a infecciones específicas, y fortalecen el sistema inmunitario</StyledStartP>
                    <StyledStartP>Tras vacunarnos, nuestro sistema inmunitario produce anticuerpos, como ocurre cuando nos exponemos a una enfermedad, con la diferencia de que las vacunas contienen solamente microbios (como virus o bacterias) muertos o debilitados y no causan enfermedades ni complicaciones. La mayoría de las vacunas se inyectan, pero otras se ingieren (vía oral) o se nebulizan en la nariz</StyledStartP>
                    <StyledOneH2>¿Cómo funciona la vacuna?</StyledOneH2>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/Zi6-rKN90-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col xs={12}>
                    <StyledOneH3>Vacuna contra el COVID-19 de Pfizer-BioNTech </StyledOneH3>
                    <StyledStartP>Los Centro de Enfermedades Contagiosa (CDC) recibieron una mayor cantidad de informes sobre casos de miocarditis y pericarditis en adolescentes y adultos jóvenes después de la vacunación contra el Covid 19. Los beneficios conocidos y potenciales de la vacunación contra el Covid 19 superan los riesgos conocidos y potenciales, incluido el posible riesgo de miocarditis o pericarditis. Seguimos recomendando la vacuna contra el Covid 19 a las personas de 12 años o más. Para este tipo de vacuna es necesario la cantidad de dos dosis con diferencia de 21 días de la primera dosis a la segunda. Siendo esta aplicada en el músculo de la parte superior del brazo. De igual manera se proporciona la siguiente pregunta:</StyledStartP>
                    <StyledOneH3>¿Quién NO debería vacunarse con estas vacunas?</StyledOneH3>
                    <ul>
                        <li>Si tuvo una reacción alérgica grave (anafilaxia) o una reacción alérgica inmediata, incluso si no fue grave, a alguno de los ingredientes de la vacuna de ARNm contra el Covid 19 (como el polietilengliCol), no debe recibir una vacuna de ARNm contra el Covid 19.</li>
                        <li>Cuando una reacción es alérgica grave o inmediata después de recibir la primera dosis de una vacuna de ARNm contra el Covid 19, no debe recibir una segunda dosis de ninguna de las vacunas de ARNm contra el Covid-19</li>
                        <li>
                            Una reacción alérgica grave es la que requiere tratamiento con epinefrina o EpiPen o atención médica. Conozca los efectos secundarios más comunes de las vacunas contra el Covid 19 y cuándo debe llamar a su médico
                        </li>
                        <li>
                            La reacción alérgica inmediata es una reacción dentro de las 4 horas de la exposición, incluidos síntomas como sarpullido, inflamación o sibilancias (dificultad respiratoria).
                        </li>
                    </ul>
                    <Col xs={12}>
                        <StyledOneH2>Posibles Efectos Secundarios</StyledOneH2>
                        <p>En el brazo donde recibio la vacuna inyectable:</p>
                        <StyledUlList>
                            <li>Dolor</li>
                            <li>Enrojecimiento</li>
                            <li>Hinchazón</li>
                        </StyledUlList>
                        <p>En el resto del cuerpo:</p>
                        <StyledUlList>
                            <li>Cansancio</li>
                            <li>Dolor de Cabeza</li>
                            <li>Dolor Muscular</li>
                            <li>Escalofríos</li>
                            <li>Fiebre</li>
                            <li>Naúseas</li>
                        </StyledUlList>
                        <StyledStartP>Estos efectos secundarios aparecen uno o dos días después de haber recibido la vacuna. Son signos normales de que su organismo está generando protección, y deberían desaparecer en unos días.</StyledStartP>
                    </Col>
                    <Col xs={12}>
                        <StyledOneH3>Vacuna contra el COVID-19 de Moderna</StyledOneH3>
                        <StyledStartP>
                            La vacuna contra la COVID-19 de Moderna se administrará mediante una inyección en el músculo. La serie de vacunación de la vacuna contra la COVID-19 de Moderna es de 2 dosis administradas con 1 mes de diferencia. Si recibe una dosis de la vacuna contra la COVID-19 de Moderna, debe recibir una segunda dosis de esta misma vacuna 1 mes después para completar la serie de vacunación. De la misma manera este tipo de vacuna se administra a partir de los 18 años de edad o más.
                        </StyledStartP>
                    </Col>
                    <Col xs={12}>
                        <StyledOneH2>Posibles Efectos Secundarios</StyledOneH2>
                        <p>En el brazo donde recibio la vacuna inyectable:</p>
                        <StyledUlList>
                            <li>Dolor</li>
                            <li>Enrojecimiento</li>
                            <li>Hinchazón</li>
                        </StyledUlList>
                        <p>En el resto del cuerpo:</p>
                        <StyledUlList>
                            <li>Cansancio</li>
                            <li>Dolor de Cabeza</li>
                            <li>Dolor Muscular</li>
                            <li>Escalofríos</li>
                            <li>Fiebre</li>
                            <li>Naúseas</li>
                        </StyledUlList>
                    </Col>
                    <Col xs={12}>
                        <StyledOneH3> Vacuna contra el COVID-19 Janssen de Johnson & Johnson</StyledOneH3>
                        <StyledStartP>La vacuna Janssen es producida por la farmacéutica Johnson & Johnson, la cual fue desarrollada mediante el método científico denominado vector viral, el cual consiste en una tecnología que utiliza una versión inofensiva del virus para entrenar al sistema inmune a identificar y defenderse del SARS-Cov-2, virus que produce la enfermedad de la COVID-19.</StyledStartP>
                        <StyledStartP>
                            Janssen requiere una sola dosis de aplicación, vía intramuscular, y según los estudios de la farmacéutica Johnson & Johnson, a los 29 días después de administrar la primera y única dosis, el 90 % de las personas desarrollaron anticuerpos, mientras que el 100 % los desarrolló a los 57 días. Por esta razón, la farmacéutica consideró que no era necesario poner un segundo refuerzo, pues solo con la primera dosis se adquiere un porcentaje alto de inmunidad.
                        </StyledStartP>
                        <StyledOneH3>¿Janssen tiene ventajas con respecto a las demás vacunas por ser de una sola dosis?</StyledOneH3>
                        <StyledStartP>
                            La epidemióloga Andrea Ramírez explica que el perfil de efectividad de Janssen para prevenir infección de COVID-19 es tan buena como las demás vacunas que requieren dos dosis.
                        </StyledStartP>
                        <StyledOneH3>¿Qué debe decirle a la persona que administra la vacuna?</StyledOneH3>
                        <StyledStartP>Informe a su proveedor de vacunas sobre todas sus afecciones médicas, incluyendo si:</StyledStartP>
                        <StyledUlList>
                            <li>Tiene alguna alergia</li>
                            <li>Presenta fiebre</li>
                            <li>Ha presentado algún trastorno hemorrágico o está tomando un anticoagulante como warfarina (Coumadin, Jantoven)</li>
                            <li>Está inmunodeprimido (sistema inmunitario debilitado) o está en tratamiento con un medicamento que afecta al sistema inmunitario</li>
                            <li>Se encuentra usted embarazada o planea quedar embarazada</li>
                            <li>En su vida amamantando</li>
                            <li>Ha recibido otra vacuna contra la COVID-19</li>
                            <li>Ha tenido una reacción alérgica grave a cualquier ingrediente de esta vacuna</li>
                        </StyledUlList>
                        <StyledOneH3>¿Cuáles son los riesgos de la vacuna contra la COVID-19 de Janssen [Johnson and Johnson]?</StyledOneH3>
                        <p>Los efectos secundarios que se han reportado con la vacuna contra la COVID-19 de Janssen [Johnson and Johnson] incluyen:</p>
                        <StyledUlList>
                            <li>Dolor, hinchazón y enrojecimiento en el sitio de la inyección</li>
                            <li>Cansancio</li>
                            <li>Dolor de Cabeza</li>
                            <li>Dolores Musculares</li>
                            <li>Dolor en las Artculaciones</li>
                            <li>Escalofríos</li>
                            <li>Náuseas</li>
                            <li>Fiebre</li>
                        </StyledUlList>
                        <StyledStartP>Existe una remota posibilidad de que la vacuna contra la COVID-19 de Janssen [Johnson and Johnson] pueda causar una reacción alérgica grave. Una reacción alérgica grave normalmente ocurriría en el lapso de unos minutos a una hora después de recibir una dosis de la vacuna contra la COVID-19 de Janssen [Johnson and Johnson].</StyledStartP>
                        <p>
                            Las señales de una reacción alérgica grave pueden incluir:
                        </p>
                        <StyledUlList>
                            <li>Dificultad para Respirar</li>
                            <li>Inflamación del rostro y la garganta</li>
                            <li>Una erupción grave en todo el cuerpo</li>
                            <li>Ritmo Cardíaco rápido</li>
                            <li>Mareos y debilidad</li>
                        </StyledUlList>
                        <StyledStartP xs={12}>
                            En algunas personas que recibieron la vacuna contra la COVID-19 de Janssen (Johnson and Johnson) se han producido coágulos de sangre que afectan los vasos sanguíneos del cerebro, el abdomen y las piernas, junto con niveles bajos de plaquetas (células sanguíneas que ayudan al cuerpo a detener el sangrado). En las personas que desarrollaron estos coágulos sanguíneos y niveles bajos de plaquetas, los síntomas comenzaron aproximadamente una o dos semanas después de la vacunación. La mayoría de las personas que desarrollaron estos coágulos sanguíneos y niveles bajos de plaquetas era mujeres de 18 a 49 años. La posibilidad de que esto ocurra es muy poco común. Debe buscar atención médica de inmediato si tiene alguno de los siguientes síntomas después de recibir la vacuna contra la COVID-19 de Janssen (Johnson and Johnson):
                        </StyledStartP>
                        <StyledUlList>
                            <li>Dificultad para respirar</li>
                            <li>Dolor en el pecho</li>
                            <li>Hinchazon de las piernas</li>
                            <li>Dolor abdominal persistente</li>
                            <li>Dolores de cabeza graves o persistentes o visión borrosa</li>
                            <li>Hematomas que se forman con facilidad o pequeñas manchas de sangre debajo de la piel mas alla del sitio de la inyección</li>
                        </StyledUlList>
                        <Col xs = {12}>
                            <StyledOneH2>Vacuna contra el Covud-19 Spikevax</StyledOneH2>
                            <StyledStartP>Spikevax es una vacuna para prevenir la enfermedad provocada por el coronavirus 2019 (Covid-19) en personas a partir de 12 años. Spikevax contiene una molécula denominada ARN mensajero (ARNm) con instrucciones para producir una proteína del SARS-CoV-2, el virus causante de la Covid 19. Spikevax no contiene el virus en sí y no puede causar la Covid 19.</StyledStartP>
                            <StyledOneH3>¿Cómo se usa Spikevax? </StyledOneH3>
                            <StyledStartP>Spikevax se administra en dos inyecciones, por lo general en el músculo de la parte superior del brazo, con un intervalo de 28 días. Las pautas para el suministro de la vacuna serán responsabilidad de las autoridades nacionales. Para mayor información sobre el uso de Spikevax, consulte el prospecto o póngase en contacto con su médico o farmacéutico. </StyledStartP>
                            <StyledOneH3>¿Cómo actúa Spikevax? </StyledOneH3>
                            <StyledStartP>Spikevax actúa preparando al organismo para defenderse contra la COVID-19. Contiene una molécula denominada ARN mensajero (ARNm) que incorpora instrucciones para fabricar la proteína espicular. Se trata de una proteína que se encuentra sobre la superficie del virus SARS-CoV-2 y que este necesita para introducirse en las células del organismo. Una vez administrada la vacuna a una persona, algunas de sus células leerán las instrucciones del ARN mensajero y producirán temporalmente la proteína espicular. A continuación, el sistema inmunitario de esa persona reconocerá esta proteína como extraña, producirá anticuerpos y activará las células T (los leucocitos) para atacarla</StyledStartP>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </StyledFontSizeContainer>
    )
}

export default ArtThree
