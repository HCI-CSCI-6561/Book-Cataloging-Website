import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import BookCard from './components/BookCard';
import BookListing from './components/BookListing';
import NavHeader from './components/NavHeader';
import FilterSection from './components/FilterSection';

import BookDetail from './components/BookDetail';
import Bookshelf from './components/Bookshelf';
import HomeBlock from './components/HomeBlock';
import ReviewPage from './components/ReviewPage';
import Reviews from './components/Reviews';

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
          element={<HomeBlock />} /> 
        <Route
          path="/review/:id"
          element={<ReviewPage />} /> 
        <Route
          path="/book"
          element={
            <div className="bg-[#b08c7d] min-h-screen p-6">
              <BookDetail />
              <Reviews />
            </div>
          }
        />
        <Route
          path="/bookshelf"
          element={<Bookshelf />} />
      </Routes>
    </Router>
  );
}

export default App;
