import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types/Produto'

type FavState = {
  itens: Produto[]
}

const initialState: FavState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const existe = state.itens.find((p) => p.id === action.payload.id)
      if (existe) {
        state.itens = state.itens.filter((p) => p.id !== action.payload.id)
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
