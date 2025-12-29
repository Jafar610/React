import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Iphone from './components/Iphone/iphone.jsx'
import Airpod from './components/AirPod/Airpod.jsx'
import Watch  from  './components/Watch/Watch.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Iphone />
    <Airpod />
    <Watch />
    <Footer />
  </StrictMode>,
)
