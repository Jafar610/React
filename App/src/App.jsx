import { Route, Routes } from "react-router-dom";
import Header from './components/header/header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Iphone from './components/Iphone/iphone.jsx'
import Airpod from './components/AirPod/Airpod.jsx'
import Watch  from  './components/Watch/Watch.jsx'
import Apple_Cards from './components/Cards/Apple_Cards.jsx'
import YoutubeVedio from './components/LatestVideo/YoutubeVedio.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element = {<Iphone />} />
        <Route path="/airpod" element = {<Airpod />} />
        <Route path="/iphone" element = {<Iphone />} />
        <Route path="/watch" element = {<Watch />} />
        <Route path="/airpod" element = {<Apple_Cards />} />
        {/* <YoutubeVedio /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
