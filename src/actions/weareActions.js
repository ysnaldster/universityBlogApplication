import loadingWeare from "../helpers/loadingWeare";
import { types } from '../types/types'

export const infoWeare = () => {
    return async (dispatch) => {
        const weare = await loadingWeare()
        dispatch(setWeare(weare))
    }
}
export const setWeare = (info) => {
    return {
        type: types.uiWeareInfo,
        payload: info
    }
}

