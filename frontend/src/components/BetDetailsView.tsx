import {
  Card,
  CardContent,
  Typography,
  Chip,
  CardActions,
  Button
} from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Bet } from '../store/betSlice'

type BetDetailsType = { bet: Bet }

export default function BetDetailsView ({bet}: BetDetailsType) {
  
  const {
    title,
    minimumWager,
    criteria,
    competitors,
    expirationTime
  } = bet
  const expirationDate: any = new Date(expirationTime)
  const now: any = new Date()
  const diffTime = expirationDate - now
  const timeLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Minimaler Wetteinsatz {minimumWager}
        </Typography>

        {criteria.map(({ title, probability }, index) => (
          <Chip label={`${title} (${probability})`} sx={{ m: 0.25 }} />
        ))}

        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Bereits platzierte Wetten: {competitors.length}
        </Typography>
        <Typography variant='body2'>
          {timeLeft > 0
            ? `Noch ${timeLeft} Tag(e) Zeit.`
            : `Wette beendet am ${(expirationDate as Date).toLocaleDateString(
                'de-DE'
              )}.`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Details</Button>
      </CardActions>
    </Card>
  )
}
