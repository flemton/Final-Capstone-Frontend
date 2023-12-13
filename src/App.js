import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddCar from './pages/AddCar/AddCar';
import ReservationList from './pages/ReservationsList/ReservationList';
import './App.css';
import Login from './components/Session/Login';
import Register from './components/Session/Register';
import AddReservation from './pages/AddReservation/AddReservation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/user_reservations" element={<ReservationList />} />
        <Route path="/reserve" element={<AddReservation />} />
      </Routes>
    </Router>
  );
}

export default App;
