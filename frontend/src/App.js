import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import BookCard from './components/BookCard';
import BookListing from './components/BookListing';
import NavHeader from './components/NavHeader';
import FilterSection from './components/FilterSection';
import Bookshelf from './components/Bookshelf';
import ReviewPage from './components/ReviewPage';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/navbar" 
          element={<NavBar />} /> 
        <Route 
          path="/login" 
          element={<LoginPage />} /> 
        <Route 
          path="/bookcard" 
          element={<BookCard />} /> 
        <Route 
          path="/booklisting" 
          element={<BookListing />} />
        <Route 
          path="/navheader" 
          element={<NavHeader />} />
        <Route 
          path="/filter" 
          element={<FilterSection />} />
        <Route
          path="/home"
          element={<Homepage />} /> 
        <Route
          path="/review/:id"
          element={<ReviewPage />} /> 
        <Route
          path="/bookshelf"
          element={<Bookshelf />} />
      </Routes>
    </Router>
  );
}

export default App;
