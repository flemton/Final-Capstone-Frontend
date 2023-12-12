import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Login from './components/Session/Login';
import Register from './components/Session/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" />
        <Route path="/addcar" />
        <Route path="/user_reservations" />
        <Route path="/reserve" />
      </Routes>
    </Router>
  );
}

export default App;
