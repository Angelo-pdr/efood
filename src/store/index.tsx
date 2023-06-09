import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import CartReducer from './reduce/cart'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export default store
