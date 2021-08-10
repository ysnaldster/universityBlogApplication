import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
const StyledCardButtonDescription = styled(CardActions)`
    display: flex;
    justify-content: flex-end;
`
const StyledButtonInfoSchoolCard = styled.button`
    background: black;
    color: white;
    padding: 9px;
    border-radius: 10px;
    margin-right: 10px;
`
const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 140,
    },
});

const StyledMainCard = styled(CardMedia)`
    @media (min-width: 1200px){
        height: 140px;
    }
    @media (min-width: 1600px){
        height: 252px;
    }
`

const DescripSchool = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root} style={{ height: '100%' }}>
            <Typography className={classes.title} color="textPrimary" gutterBottom style={{ fontSize: '24px', padding: '10px 20px', fontWeight: '700' }}>
                Escuela Mariano Picón Salas
            </Typography>
            <CardActionArea>
                <StyledMainCard
                    image="https://i.ibb.co/9tfycCt/1.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: '18px' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <StyledCardButtonDescription>
                <Link to = '/school'>
                    <StyledButtonInfoSchoolCard>
                        Read More
                    </StyledButtonInfoSchoolCard>
                </Link>
            </StyledCardButtonDescription>
        </Card>
    )
}

export default DescripSchool
