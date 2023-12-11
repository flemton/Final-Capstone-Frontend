import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import AddCar from './components/AddCar/AddCar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/user_reservations" />
        <Route path="/reserve" />
      </Routes>
    </Router>
  );
}

export default App;
