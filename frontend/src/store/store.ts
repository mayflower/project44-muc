import { configureStore } from '@reduxjs/toolkit'
import { betsApi } from '../api/betsapi'
import betsReducer from './betsSlice'


export default configureStore({
  reducer: {
    bets: betsReducer,
    [betsApi.reducerPath]: betsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(betsApi.middleware),
})
