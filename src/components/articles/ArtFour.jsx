import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

// Styles
const StyledStart = styled.p`
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
const StyledLi = styled.li`
    margin: 15px 0px;
`

const ArtFour = () => {
    return (
        <StyledFontSizeContainer fluid>
            <Row>
                <Col xs={12}>
                    <StyledOneH2>Signos y Sintomas del Covid 19</StyledOneH2>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/QYVNK_Mt1Pw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <StyledStart>Si estás enfermo con la Covid 19, puedes ayudar a prevenir que se propague la infección con el virus que causa la Covid 19. A través de las siguientes recomendaciones a seguir para actuar ante la mencionada situación. </StyledStart>
                    <StyledUlList>
                        <StyledLi>Quédate en casa y no vayas al trabajo, a la escuela, ni a lugares públicos a no ser que sea para recibir atención médica.</StyledLi>
                        <StyledLi>Evita el transporte público, los viajes compartidos, o los taxis.</StyledLi>
                        <StyledLi>Si es posible, aíslate en un solo cuarto, separado de tu familia y de otras personas. Esto incluye comer en tu cuarto. Abre las ventanas para que el aire circule. Usa un baño separado, si es posible.</StyledLi>
                        <StyledLi>Evita compartir el espacio en tu casa, tanto como sea posible. Si compartes el espacio, limita tus movimientos. Ventila bien la cocina y otros espacios que se compartan. Mantén una distancia de por lo menos 6 pies (2 metros) de los miembros de tu familia.</StyledLi>
                        <StyledLi>Todos los días limpia las superficies que tocas con frecuencia en el cuarto y el baño que solo usas tú, como los pestillos de las puertas, los interruptores de luz y las encimeras.</StyledLi>
                        <StyledLi>Evita compartir objetos personales de la casa, como vajilla, toallas, ropa de cama y dispositivos electrónicos.</StyledLi>
                        <StyledLi>Ponte una mascarilla cuando estés cerca de otros. Cámbiate la mascarilla todos los días.</StyledLi>
                        <StyledLi>Si no es posible ponerte una mascarilla, cúbrete la boca y la nariz con un pañuelo o con el codo cuando tosas o estornudes. Después, desecha el pañuelo descartable, o lávalo si es de tela.</StyledLi>
                        <StyledLi>Lávate las manos con frecuencia, con agua y jabón, por lo menos por 20 segundos, o usa un desinfectante para manos con base de alcohol que contenga al menos 60% de alcohol.</StyledLi>
                    </StyledUlList>
                </Col>
                <Col xs={12}>
                    <StyledOneH2>Cómo protegerte mientras cuidas a alguien que tiene Covid 19</StyledOneH2>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/OCtVx7e21XI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <StyledStart>Para protegerte si cuidas a alguien que tiene la Covid 19, los Centros para el Control y la Prevención de Enfermedades de los Estados Unidos (CDC), y la Organización Mundial de la Salud (OMS) recomiendan:</StyledStart>
                    <StyledUlList>
                        <StyledLi>Mantén las manos limpias y no te toques la cara. Lávate las manos con frecuencia con agua y jabón por lo menos por 20 segundos, especialmente después de estar en contacto cercano o en el mismo cuarto con la persona enferma. Si no dispones de agua ni jabón, usa un desinfectante de manos que contenga por lo menos un 60% de alcohol. Evitar tocarte los ojos, la nariz, y la boca.</StyledLi>
                        <StyledLi>Ponte la mascarilla. Si tienes que estar en el mismo cuarto con la persona enferma, y esta persona no puede ponerse una mascarilla, ponte tú la máscara. Mantén una distancia de por lo menos 6 pies (2 metros) de la persona enferma. No toques ni muevas la máscara mientras la tienes puesta. Si la máscara se moja o se ensucia, reemplázala con una que esté limpia y seca. Desecha la mascarilla usada y lávate las manos</StyledLi>
                        <StyledLi>Limpia tu casa frecuentemente. Todos los días usa productos de limpieza en forma de aerosol o paños húmedos para limpiar las superficies que se tocan con frecuencia, incluyendo encimeras, mesas, y pestillos de puertas. Evita limpiar el cuarto y el baño separados que usa solo la persona enferma. Separa ropa de cama y utensilios para el uso exclusivo de la persona enferma.</StyledLi>
                        <StyledLi>Ten cuidado con la ropa sucia. No la sacudas. Usa el detergente que usas siempre para lavar la ropa de la persona enferma. Lava con el agua a la temperatura más alta posible. Lávate las manos después de poner la ropa en la secadora. Seca la ropa completamente. Si tienes que tocar la ropa sucia de la persona enferma, ponte guantes desechables y mantén esta ropa lejos de tu cuerpo. Lávate las manos después de quitarte los guantes desechables. Pon los guantes y las máscaras usados en un bote de basura con tapa en el cuarto de la persona enferma. Limpia y desinfecta las canastas para la ropa y lávate las manos después.</StyledLi>
                        <StyledLi>Ten cuidado al lavar la vajilla. Ponte guantes al tocar los platos, tazas, o cubiertos que usó la persona enferma. Lava estos utensilios con agua caliente y jabón, o ponlos en el lavaplatos. Lávate las manos después de sacarte los guantes o de tocar objetos usados.</StyledLi>
                        <StyledLi>Evita el contacto directo con los fluidos corporales de la persona enferma. Ponte guantes desechables y una mascarilla cuando ayudes a la persona enferma con cuidado oral o respiratorio, y cuando te encargues de sus heces, orina, u otros desechos. Lávate las manos antes y después de quitarte los guantes desechables y la mascarilla. No vuelvas a usar los guantes ni la mascarilla.</StyledLi>
                        <StyledLi>Evita que vengan visitas innecesarias a tu casa. No permitas que vengan visitas hasta que la persona enferma se haya recobrado completamente y ya no tenga signos ni síntomas deCOVID-19 usen mascarillas médicas.</StyledLi>
                    </StyledUlList>
                    <p>Los investigadores están estudiando otros tratamientos potenciales para la Covid 19, por ejemplo:</p>
                    <StyledUlList>
                        <StyledLi>
                            <strong>Medicamentos antivirales:</strong> <br/>
                            Además del remdesivir, otros fármacos antivirales que se están evaluando son el favipiravir y el merimepodib. Los estudios han demostrado que la combinación de lopinavir con ritonavir no es eficaz</StyledLi>
                        <StyledLi>
                            <strong>Dexametasona: </strong> <br/>
                            <p>El corticosteroide dexametasona es un tipo de fármaco antiinflamatorio que los investigadores están estudiando para tratar o prevenir la disfunción orgánica y las lesiones pulmonares debidas a la inflamación. Los estudios han encontrado que reduce en un 30 % el riesgo de muerte en las personas que utilizan respirador y en un 20 % en las personas que necesitan oxígeno suplementario.</p>
                            <StyledStart>Los Institutos Nacionales de Salud (NIH, por sus siglas en inglés) de EE. UU. han recomendado este fármaco para las personas hospitalizadas con COVID-19 que utilizan respiradores mecánicos o necesitan oxígeno suplementario. Si no se dispone de dexametasona, pueden utilizarse otros corticosteroides, como la prednisona, la metilprednisolona o la hidrocortisona. La dexametasona y otros corticosteroides pueden ser perjudiciales si se administran para una infección por COVID-19 menos grave.</StyledStart>
                            <StyledStart>En algunos casos, se les puede administrar el medicamento tocilizumab con dexametasona a las personas hospitalizadas que estén con ventilación mecánica o que necesiten administración de oxígeno suplementario. El remdesivir se puede administrar con dexametasona a las personas hospitalizadas que necesiten oxígeno suplementario o que estén con ventilación mecánica.</StyledStart>
                        </StyledLi>
                        <StyledLi>
                            <strong>Terapia antiinflamatoria:</strong> <br/>
                            Los investigadores estudian muchos medicamentos antiinflamatorios para tratar o prevenir la disfunción de varios órganos y la lesión pulmonar que provoca la inflamación asociada a la infección.
                        </StyledLi>
                        <StyledLi>
                            <strong> Inmunoterapia:</strong> <br/>
                          Los investigadores estudian el uso de un tipo de inmunoterapia llamada plasma de personas convalecientes. La FDA ha dado autorización de uso de emergencia para la terapia con el plasma de personas convalecientes para tratar la Covid 19. El plasma de personas convalecientes es sangre donada por personas que se recuperaron de la Covid 19. El plasma de personas convalecientes con un alto nivel de anticuerpos se puede usar para tratar a algunas personas hospitalizadas enfermas de Covid 19 que se encuentran en la fase inicial de la enfermedad o que tienen el sistema inmunitario debilitado.
                        </StyledLi>
                        <StyledLi>
                            <strong>Fármacos que se están evaluando y cuya eficacia es incierta:</strong> <br/>
                            Los investigadores estudian el amlodipino y el losartán. Pero todavía no se sabe lo eficaces que puedan ser estos fármacos para tratar o prevenir la Covid 19. No es probable que la ivermectina y la famotidina sean beneficiosas para tratar la Covid 19
                        </StyledLi>
                        <StyledLi>
                            <strong>Hidroxicloroquina y cloroquina:</strong> <br/>
                            La FDA autorizó estos fármacos contra la malaria para su uso de emergencia durante la pandemia de Covid 19. Sin embargo, la FDA revocó esta autorización cuando el análisis de datos demostró que es poco probable que estos fármacos sean eficaces para tratar la Covid 19. También pueden causar graves problemas del corazón
                        </StyledLi>
                    </StyledUlList>
                </Col>
            </Row>
        </StyledFontSizeContainer>
    )
}

export default ArtFour
