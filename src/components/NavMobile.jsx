import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from "@chakra-ui/react"
import { Col, Row, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { VscReferences } from 'react-icons/vsc'
import { ImPhone } from 'react-icons/im'
import { Link } from 'react-router-dom';
const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));



const NavMobile = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="static"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                style={{ background: '#393E46' }}
            >
                <Container fluid >
                    <Row>
                        <Col xs={6} style={{ padding: '0px' }}>
                            <Toolbar style={{ padding: '0px' }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                        </Col>
                    </Row>
                </Container>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        <p style={{ margin: '0px 34px' }}>Descubre</p>
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key='Hola'>
                        <ListItemIcon>
                            <FaUser style={{ fontSize: '20px', marginLeft: '2px' }} />
                        </ListItemIcon>
                        <ListItemText primary='Hola' />
                    </ListItem>
                </List>
                <List>
                    <ListItem button key='Proyectos'>
                        <ListItemIcon>
                            <MdWork style={{ fontSize: '20px', marginLeft: '2px' }} />
                        </ListItemIcon>
                        <ListItemText primary='Proyectos' />
                    </ListItem>
                </List>
                <Link to='/references' style={{ textDecoration: 'none' }}>
                    <List>
                        <ListItem button key='Referencias'>
                            <ListItemIcon>
                                <VscReferences style={{ fontSize: '20px', marginLeft: '2px' }} />
                            </ListItemIcon>
                            <ListItemText primary='Referencias' />
                        </ListItem>
                    </List>
                </Link>
                <List>
                    <ListItem button key='Contacto'>
                        <ListItemIcon>
                            <ImPhone style={{ fontSize: '20px', marginLeft: '2px' }} />
                        </ListItemIcon>
                        <ListItemText primary='Contacto' />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default NavMobile
