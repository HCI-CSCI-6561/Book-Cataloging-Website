import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/navbar" 
          element={<NavBar />} /> // Protect the Dashboard route
        <Route 
          path="/login" 
          element={<Login />} /> // Protect the Dashboard route
      </Routes>
    </Router>
  );
}

export default App;
