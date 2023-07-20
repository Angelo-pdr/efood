import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    },
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, close, open, remover, clear } = CartSlice.actions
export default CartSlice.reducer
