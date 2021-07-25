import {types} from '../types/types'
const loadArticles = (state = {}, action) => {
    switch (action.type) {
        case types.uiArticlesLoad:
            return {
                ...state,
                articles: [...action.payload]
            }
        default:
        return state;
    }
}

export default loadArticles