import { ThemeProvider } from '@mui/material';
import './style/App.css';
import { mayflowerTheme } from './style/mayflower-theme';
import Header from './components/Header';
import Footer from "./components/Footer";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {addBets} from './store/betsSlice';
import { useGetBetsQuery } from './api/betsapi';

function App() {
//@ts-ignore
// const bets = useSelector(state => state.bets.value)
// const dispatch = useDispatch()


// fetch("https://api.project44.mayflower.tech/bet")
// .then(data => data.json())
// .then(data => {
//   console.log(data)
//   dispatch(addBets(data))
//   // console.log(bets)
// }
//  );

const { data, error, isLoading } = useGetBetsQuery()

console.log(data);

  return (
    <div className="App">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <ThemeProvider theme={mayflowerTheme}>
            <Header />
            <div className='body'>
              <div style={{display: 'flex',  justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 118px)', fontSize: '30px'}}>Hier könnte Ihre Wettplattform entstehen</div>
            </div>
            <Footer />
          </ThemeProvider>
        </LocalizationProvider>
    </div >
  );
}

export default App;
