
import { configureStore } from '@reduxjs/toolkit'

import cashReduser from './cashReducer'
import customerReducer from './customerReducer'

export const store = configureStore({
    reducer: {
        cash: cashReduser,
        customers: customerReducer
    },
})
