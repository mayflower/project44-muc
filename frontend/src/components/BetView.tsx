import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Bet } from '../store/betSlice';
import { Chip } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



export default function BetView({bet}:{bet:Bet}) {

  const {title, minimumWager, criteria, competitors, expirationTime} = bet;

  const expirationDate:any = new Date(expirationTime);
  const now:any = new Date();
  const diffTime = expirationDate - now;
  const timeLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const location = useLocation();
  const history = useHistory();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Minimaler Wetteinsatz {minimumWager}
        </Typography>

        {
          criteria.map(({title, probability}, index) => <Chip label={`${title} (${probability})`} sx={{m:0.25}}/>)
        }

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Bereits platzierte Wetten: {competitors.length}
        </Typography>
        <Typography variant="body2">
        {
          timeLeft > 0 ? `Noch ${timeLeft} Tag(e) Zeit.` : `Wette beendet am ${(expirationDate as Date).toLocaleDateString('de-DE')}.`
        }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => history.push('/details', {bet})}>Details</Button>
      </CardActions>
    </Card>
  );
}
