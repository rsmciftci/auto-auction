import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheNavbar from './components/TheNavbar';
import Home from './pages/Home';

function App() {
  return (

    <Router>
      {/* <TheNavbar /> */}
      <TheNavbar />
      <Routes>
        <Route path='/'  element={<Home />} />
       

      </Routes>
      {/* <TheFooter /> */}
    </Router>
  );
}

export default App;
