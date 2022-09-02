import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { Bet } from './betSlice'


// Define a type for the slice state
interface Bets {
  value: Bet[]
}

const initialState: Bets = {
  value: []
}

export const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    addBets: (state, action: PayloadAction<Bet[]>) => {
      state.value = [...state.value, ...action.payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addBets } = betsSlice.actions

export default betsSlice.reducer