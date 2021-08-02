import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { Avatar } from "@chakra-ui/react"
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react"
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ImPhone } from 'react-icons/im'
import Footer from './Footer.jsx'


// Styles 

const StyledContainerCardsPerson = styled(Container)`
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 90vh;
    padding-bottom: 100px;
    background-color: #393E46;
`

const StyledTitleMainP = styled.p`
        font-weight: 700;
        font-size: 32px;
        color: #ffffff;
`
const StyledMenuDiv = styled.div`
    display: flex;
    position: absolute;
    left: 140px;
    top: 40px;
`

const StyledMenuButtonTwo = styled(MenuButton)`
    border: none; 
    background: #6d6d6d;
    padding: 20px;
    border-radius: 500px;

`

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const WeAre = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const infoweare = useSelector(state => state.infoWeare.weare)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div style={{ background: '#393E46', height: '100vh' }}>
            <Container fluid style={{ padding: '40px 140px 30px 140px' }}>
                <Row>
                    <Col xs={4}>
                        <StyledMenuDiv>
                            <Menu>
                                <StyledMenuButtonTwo>
                                    <AiOutlineMenu style={{ fontSize: '25px', color: '#ffffff' }} />
                                </StyledMenuButtonTwo>
                                <MenuList>
                                    <Link to='/articles'>
                                        <MenuItem>Inicio</MenuItem>
                                    </Link>
                                    <Link to='/everyone'>
                                        <MenuItem>Ver mas Artículos</MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </StyledMenuDiv>
                    </Col>
                    <Col xs={8}>
                        <StyledTitleMainP>Information Blog of COVID-19</StyledTitleMainP>
                    </Col>
                </Row>
            </Container>
            <StyledContainerCardsPerson fluid>
                {
                    infoweare !== undefined && infoweare.map(weare => {
                        return (
                            <Card className={classes.root} key={weare.id} style={{ margin: '2% 2%' }}>
                                <CardHeader
                                    title={weare.name} />
                                <CardContent style={{ padding: '0px 16px' }}>
                                    <Container fluid tyle={{ display: 'flex', justifyContent: 'center' }}>
                                        <Row>
                                            <Col xs={12} style={{ margin: '10px 0px', height: '48px', color: '#949799' }}>
                                                <p>{weare.profession}</p>
                                                <p>
                                                    {weare.professiontwo}
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                                                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" style={{ height: '100%', width: '80%' }} />

                                            </Col>
                                        </Row>
                                    </Container>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {weare.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    {/* <IconButton aria-label="contact" style={{ padding: '5px 10px', background: '#FAF8F7', boxShadow: '0px 4px 8px rgb(89 73 30 / 16%)', borderRadius: '0px', marginLeft: '5px' }}>
                                       
                                        <div style={{ fontSize: '18px', margin: '5px' }}>Contactar</div>
                                    </IconButton> */}
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ImPhone/>
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        <Typography paragraph>
                                           Información de Contacto
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        )
                    })
                }
            </StyledContainerCardsPerson>
            <Footer/>
        </div>
    )
}

export default WeAre

