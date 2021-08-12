import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from "@chakra-ui/react"
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
    const infoweare = useSelector(state => state.infoWeare.weare)
    return (
        <div style={{ background: '#393E46', height: '100vh' }}>
            <Container fluid style={{ padding: '40px 140px 80px 140px' }}>
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
                        <StyledTitleMainP>Portal Mariano Picón Salas</StyledTitleMainP>
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
                                                <Avatar name="Dan Abrahmov" src= {weare.img} style={{ height: '100%', width: '80%' }} />

                                            </Col>
                                        </Row>
                                    </Container>
                                    <Typography variant="body2" color="textSecondary" component="p" style = {{padding: '20px 0px', textAlign: 'justify'}}>
                                        {weare.description}
                                    </Typography>
                                </CardContent>
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

