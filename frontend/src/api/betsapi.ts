import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Bet } from '../store/betSlice'

// Define a service using a base URL and expected endpoints
export const betsApi = createApi({
  reducerPath: 'betsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.project44.mayflower.tech/' }),
  endpoints: (builder) => ({
    getBets: builder.query<Bet[], string>({
      query: () => `bet`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBetsQuery } = betsApi