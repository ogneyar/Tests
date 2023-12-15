
import { ADD_CASH, GET_CASH } from "../utils/consts"

const defaultState = {
    cash: 0
}

const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}

        case GET_CASH:
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}

export default cashReducer

export const addCashAction = (payload) => ({ type: ADD_CASH, payload })
export const getCashAction = (payload) => ({ type: GET_CASH, payload })
