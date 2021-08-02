import {types} from '../types/types'
const infoWeare = (state = {}, action) => {
    switch (action.type) {
        case types.uiWeareInfo:
            return {
                ...state,
                weare: [...action.payload]
            }
        default:
        return state;
    }
}

export default infoWeare