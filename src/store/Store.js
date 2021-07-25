import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import loadArticles from '../reducers/loadArticles'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    articles: loadArticles,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);