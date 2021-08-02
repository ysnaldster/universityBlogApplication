import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import loadArticles from '../reducers/loadArticles'
import thunk from 'redux-thunk'
import articleActive from '../reducers/articleActive'
import infoWeare from '../reducers/infoWeare'

const reducers = combineReducers({
    articles: loadArticles,
    articlesActive: articleActive,
    infoWeare: infoWeare
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);