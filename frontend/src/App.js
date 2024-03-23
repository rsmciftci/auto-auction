import './App.css';
import "react-image-gallery/styles/css/image-gallery.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheNavbar from './components/TheNavbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import SellYourCar from './pages/SellYourCar';
import EndingSoon from './pages/EndingSoon';
import Auction from './pages/Auction';
import { useEffect } from 'react';
import Favourites from './pages/Favourites';
import MyAuctions from './pages/MyAuctions';

function App() {
  


  return (

    <Router>
      <TheNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars/:city/:make/:model/:minPrice/:maxPrice' element={<Cars />} />
        <Route path='/sell-your-car' element={<SellYourCar />} />
        <Route path='/ending-soon/:page' element={<EndingSoon />} />
        <Route path='/auction/:auctionID' element={<Auction />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/my-auctions/:page' element={<MyAuctions />} />

      </Routes>
      {/* <TheFooter /> */}
    </Router>
  );
}

export default App;
