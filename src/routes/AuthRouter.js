import React from 'react'
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router,
} from "react-router-dom";
import ArticlesList from '../components/ArticlesList';
import DetailsArticle from '../components/DetailsArticle';
import EveryoneArticles from '../components/EveryoneArticles';
import SchoolDescription from '../components/SchoolDescription';
import WeAre from '../components/WeAre.jsx'


const AuthRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/articles' component={ArticlesList} />
                <Route path = '/details/:article' component = {DetailsArticle}/>
                <Route exact path = '/everyone' component = {EveryoneArticles}/>
                <Route exact path = '/school' component = {SchoolDescription}/>
                <Route exact path = '/weare' component = {WeAre} />
                <Redirect to = '/articles'/>
            </Switch>
        </Router>
    )
}

export default AuthRouter
