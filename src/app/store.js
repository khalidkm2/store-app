
import {configureStore} from '@reduxjs/toolkit'
import { productSliceReducer } from './productSlice'
import { userReducer } from './userSlice'

export const store = configureStore({
    reducer:{
        products:productSliceReducer,
        user: userReducer
    }
})