
import { ADD_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_CUSTOMER } from "../utils/consts"

const defaultState = {
    customers: []
}

const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}

        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}

        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}

        default:
            return state
    }
}

export default customerReducer

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })
