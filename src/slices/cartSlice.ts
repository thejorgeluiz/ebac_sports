import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types/Produto'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const itemExistente = state.itens.find((item) => item.id === action.payload.id)
      if (!itemExistente) {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho } = cartSlice.actions
export default cartSlice.reducer
