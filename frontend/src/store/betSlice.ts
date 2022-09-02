import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface Competitor {
  nickname: string,
  wager: number,
  mail: string,
  criteriaIndex: number,
  userId: string
}

interface Creator {
  nickname: string,
  mail: string,
  userId: string
}

interface Criteria {
  title: string,
  description: string,
  probability: number
}

interface Bet {
    competitors: Competitor[],
    betId: string,
    creator: Creator,
    expirationTime: string,
    minimumWager: number,
    isPublic: boolean,
    description: string,
    isWagerSelectable: boolean,
    criteria: Criteria[],
    title: string
}

const initialState: Bet | null = null;

export const betSlice = createSlice({
  name: 'bet',
  initialState,
  reducers: {
    addBet: (state) => {
      console.log(state);
    }
  }
})

// Action creators are generated for each case reducer function
// export const { addBet } = betSlice.actions
export default betSlice.reducer
export const { addBet } = betSlice.actions
export type { Bet }