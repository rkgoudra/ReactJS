// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
//import {Pratice} from './Practice.jsx'
import {NetFlixSeries} from './components/NetFlixSeries.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <NetFlixSeries/>
  </>
)
