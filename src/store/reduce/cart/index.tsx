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
      const pedido = state.items.find((item) => item.id === action.payload.id)
      if (!pedido) {
        state.items.push(action.payload)
      } else {
        alert('O pedido já esta no carrinho')
      }
      console.log(state.items)
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

export const { add, close, open, remover } = CartSlice.actions
export default CartSlice.reducer
