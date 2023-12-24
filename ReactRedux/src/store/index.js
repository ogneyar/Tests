
import { configureStore } from '@reduxjs/toolkit'

import cashReduser from './cashReducer'
import customerReducer from './customerReducer'
// import { thunk } from 'redux-thunk'


// const middleware = [
//     thunk,
// ]

export const store = configureStore(
    {
        reducer: {
            cash: cashReduser,
            customers: customerReducer
        },
        // middleware
    },
)
