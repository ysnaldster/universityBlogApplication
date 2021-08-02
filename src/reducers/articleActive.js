import {types} from '../types/types'

const articleActive = (state = {}, action) => {
    switch (action.type) {
        case types.articlesActive:
            return {
                ...state,
                active: {...action.payload}
            }
        default:
        return state;
    }
}

export default articleActive