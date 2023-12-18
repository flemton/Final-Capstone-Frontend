import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddCar from './pages/AddCar/AddCar';
import ReservationList from './pages/ReservationsList/ReservationList';
import './App.css';
import Login from './components/Session/Login';
import Register from './components/Session/Register';
import AddReservation from './pages/AddReservation/AddReservation';
import Session from './components/Session/Session';
import CarDetails from './components/CarDetails/CarDetails';
import DeleteCar from './components/DeleteCar/DeleteCar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Session />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/user_reservations" element={<ReservationList />} />
        <Route path="/reserve" element={<AddReservation />} />
        <Route path="/reserve/:id" element={<AddReservation />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/delete-car" element={<DeleteCar />} />
      </Routes>
    </Router>
  );
}

export default App;
