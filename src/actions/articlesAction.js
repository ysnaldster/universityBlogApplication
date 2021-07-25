import loadingArticles from "../helpers/loadingArticles";
import { types } from '../types/types'

export const articlesLoad = () => {
    return async (dispatch) => {
        const articles = await loadingArticles()
        dispatch(setArticles(articles))
    }
}

export const setArticles = (articles) => {
    return {
        type: types.uiArticlesLoad,
        payload: articles
    }
}

// export const articleActive = (id, proyect) => ({
//     type: types.proyectActive,
//     payload: {
//         id,
//         ...proyect
//     }
// });