import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioProps } from '../../../pages/Home'

type CardapioState = {
  items: CardapioProps[]
  isOpen: boolean
}

const initialState: CardapioState = {
  items: [],
  isOpen: false
}

const CartSlice = createSlice({
  name: 'cardapio',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioProps>) => {
      const game = state.items.find((item) => item.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O game já esta no carrinho')
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open } = CartSlice.actions
export default CartSlice.reducer
