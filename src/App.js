import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
