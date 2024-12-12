import React, { useState } from "react";
import BookCard from "./BookCard"; 
import NavBar from "./NavBar";
import NavHeader from "./NavHeader";
import FilterSection from "./FilterSection";
import { mockBooks } from "../mockdata";
import { IoClose } from "react-icons/io5";
import { RatingStars } from './BookCard';
import { useNavigate } from 'react-router-dom';

const BookListing = () => {
  const navigate = useNavigate();
  const onReviewClick = () => {
    navigate(`/review/${selectedBook.id}`); //use backticks (`) instead of single quotes (') for the template literal to work properly
  }; 
  const [filteredBooks, setFilteredBooks] = useState(mockBooks); // State for filtered books
  const [selectedBook, setSelectedBook] = useState(null); // Selected book for modal
  const [sortOption, setSortOption] = useState({ option: "", direction: "asc" }); // Selected sort option

  // Handle filter updates from FilterSection
  const handleFilterChange = (updatedBooks) => {
    setFilteredBooks(updatedBooks);
  };

  const [selectedOption, setSelectedOption] = useState("Want to Read");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ["Want to Read", "Reading", "Read"];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleClosePopout = () => {
    setSelectedBook(null);
  };


  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Header Section */}
      <NavBar />

      {/* Navigation Section */}
      <NavHeader onSortChange={setSortOption} />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <FilterSection books={mockBooks}
          onFilterChange={handleFilterChange}
          sortOption={sortOption} />
       

        {/* Book Listing Grid */}
        <main className="flex-1 p-6">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} selectedBook={selectedBook} setSelectedBook={setSelectedBook} onReviewClick={onReviewClick} /> // Pass book data as a prop
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No books match the selected filters.</p>
          )}
        </main>

        {/* Modal */}
        {/* ---start modal--- */}
        {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-3/4 max-w-2xl relative">
            <button
              onClick={handleClosePopout}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={24} />
            </button>
            {/* Full Details of the book*/}
            <div className="flex">
            <div className="mb-1">
              <img
                src={selectedBook.image || "https://via.placeholder.com/150"}
                alt={`${selectedBook.name} cover`}
                className="w-40 h-55 object-cover rounded shadow-md mb-4"
              />
            </div>
            <div className="ml-5 flex flex-col">
              <div className="flex items-center mb-2">
                {/* Dynamic Stars */}
                <RatingStars rating={selectedBook.averageRating} className="size-7"/>
                <span className="ml-2 text-gray-600 font-medium text-base">{selectedBook.averageRating}</span>
              </div>
              <div className="text-base text-gray-600">
                <p>No of reviews: {selectedBook.reviews.length}</p>
                <p>Published On: {selectedBook.publishDate}</p>
                <p>Total Pages: {selectedBook.pages}</p>
                <p>Volume: {selectedBook.volume}</p>
                <p>Total Volumes: {selectedBook.totalVolumes}</p>
                {/* Tags Section */}
                <div className="flex flex-wrap gap-1 mt-1">
                <p>Genre: </p>
                  {Array.isArray(selectedBook.genre) ? (
                    selectedBook.genre.map((g, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-200 rounded">{g}</span>
                    ))
                  ) : (
                    <span className="px-2 py-1 text-xs bg-gray-200 rounded">{selectedBook.genre || "Unknown"}</span>
                  )}
                </div>
              </div>
            </div>
            </div>
            {/* Title and Details Section */}
            <div className="mt-1 flex-grow"></div>
            <h2 className="font-bold text-xl mb-1">{selectedBook.name}</h2>
            <p className="text-gray-700 italic text-base mb-2">by {selectedBook.author}</p>
            <p className="text-gray-800">{selectedBook.description}</p>
          
          {/* Buttons Section */}
          <div className="mt-3 flex justify-between items-center relative">
            <button
              className="px-3 py-1 text-sm font-semibold bg-gray-300 rounded hover:bg-gray-400 flex-shrink-0"
              onClick={() => onReviewClick(selectedBook)}
            >
              Let's give a Review!
            </button>

            {/* Dropdown Button */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-[150px] px-3 py-1 text-sm font-semibold bg-gray-300 rounded hover:bg-gray-400 text-left flex items-center justify-between"
              >
                {selectedOption}
                <span className="ml-2">▼</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg">
                  {options.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          </div>
        </div>
        )}

        {/* ---end modal--- */}

      </div>
    </div>
  );
};

export default BookListing;