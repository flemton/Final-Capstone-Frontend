import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import AddCar from './components/AddCar/AddCar';
import ReservationList from './pages/ReservationsList/ReservationList';
import './App.css';
import Login from './components/Session/Login';
import Register from './components/Session/Register';

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
        <Route path="/reserve" />
      </Routes>
    </Router>
  );
}

export default App;
