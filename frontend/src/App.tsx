import { ThemeProvider } from '@mui/material'
import './style/App.css'
import { mayflowerTheme } from './style/mayflower-theme'
import Header from './components/Header'
import Footer from './components/Footer'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import BetView from './components/BetsView'

function App () {
  return (
    <div className='App'>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ThemeProvider theme={mayflowerTheme}>
          <Header />
          <div className='body'>
            <BetView />
          </div>
          <Footer />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  )
}

export default App
