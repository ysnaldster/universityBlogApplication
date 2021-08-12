import React from 'react'
import styled from 'styled-components'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react"
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import Footer from './Footer.jsx'
import { articleActive } from '../actions/articlesAction'
import { useDispatch } from 'react-redux'
import '../styles/styles.css'
// Styles

const StyledTitleMainP = styled.p`
        font-weight: 700;
        font-size: 32px;
        color: #ffffff;
`
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

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
const EveryoneArticles = () => {
    const dispatch = useDispatch()
    const handleClickArticle = (article) => {
        dispatch(articleActive(article.id, { ...article }))
    }
    const classes = useStyles();
    const everyoneArticles = useSelector(state => state.articles.articles)


    return (
        <div style={{ background: '#393E46' }}>
            <Container fluid style={{ padding: '40px 140px 20px 140px' }}>
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
                                    <Link to='/weare'>
                                        <MenuItem>Creadores del Portal</MenuItem>
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
            <Container fluid style={{ display: 'flex', width: '80%', justifyContent: 'center', marginBottom: '30px' }}>
                <Row>
                    {
                        everyoneArticles !== undefined && everyoneArticles.map(article => {
                            if (article.id !== 'school') {
                                return (
                                    <Col xs={4} key={article.id} style={{ padding: '20px 10px', display: 'flex', justifyContent: 'center' }}>
                                        <Card className={classes.root} key={article.id}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image= {article.banner}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent >
                                                    <Typography gutterBottom variant="h5" component="h2" style = {{padding: '15px'}}>
                                                        {article.title}
                                                    
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {article.content.substring(0, 80)}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <Link to={`/details/${article.id}`}>
                                                <CardActions style={{ marginLeft: '10px' }}>
                                                    <Button variant='dark' onClick={() => handleClickArticle(article)}>
                                                        Leer mas..
                                                    </Button>
                                                </CardActions>
                                            </Link>
                                        </Card>
                                    </Col>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default EveryoneArticles
