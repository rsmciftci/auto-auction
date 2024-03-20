import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheNavbar from './components/TheNavbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import SellYourCar from './pages/SellYourCar';

function App() {
  return (

    <Router>
      <TheNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars/:city/:make/:model/:minPrice/:maxPrice' element={<Cars />} />
        <Route path='/sell-your-car' element={<SellYourCar />} />

      </Routes>
      {/* <TheFooter /> */}
    </Router>
  );
}

export default App;
