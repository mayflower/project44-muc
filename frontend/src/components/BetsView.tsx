import {
  Grid,
  Container
} from '@mui/material'
import { useGetBetsQuery } from '../api/betsapi'
import BetView from './BetView';

export default function BetsView () {

  const { data, error, isLoading } = useGetBetsQuery("");

  return (
    <Container maxWidth="md" sx={{mt:6}}>
      <Grid container spacing={2}>
        {
          !isLoading 
          && data
          && data.map((b, index) => <BetView key={index} bet={b} />)
        }
      </Grid>
    </Container>
  )
}
