import React, { useState } from "react";
import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

// Dynamic star rendering component
export const RatingStars = ({ rating}) => {
  const getStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // Full star
        stars.push(
          <TbStarFilled key={i} className="text-yellow-500" size={20} fill="currentColor" />
        );
      } else if (rating >= i - 0.5) {
        // Half star
        stars.push(
          <TbStarHalfFilled key={i} className="text-yellow-500 opacity-70" size={20} fill="currentColor" />
        );
      } else {
        // Empty star
        stars.push(
          <TbStar key={i} className="text-gray-300" size={20} />
        );
      }
    }
    return stars;
  };

  return <div className="flex">{getStars()}</div>;
};

// const BookCard = ({ book, onReviewClick }) => {
const BookCard = ({ book, selectedBook, setSelectedBook   }) => {
  const navigate = useNavigate();
  const onReviewClick = () => {
    navigate(`/review/${book.id}`); //use backticks (`) instead of single quotes (') for the template literal to work properly
  };
  // const [selectedBook, setSelectedBook] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Want to Read");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ["Want to Read", "Reading", "Read"];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleMoreClick = () => {
    setSelectedBook(book);
  };

  if (!book) return null; 

  return (
    <>
      <div key={book.id} className="w-[350px] h-[370px] p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50 relative flex flex-col">
        {/* Cover and Rating Section */}
        <div className="flex">
          <div className="w-24 h-36 bg-gray-400 rounded overflow-hidden">
            <img
              src={book.image || "https://via.placeholder.com/150"}
              alt={`${book.name} cover`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3 flex flex-col justify-between">
            <div className="flex items-center">
              {/* Dynamic Stars */}
              <RatingStars rating={book.averageRating} />
              <span className="ml-2 text-gray-600 font-medium text-sm">{book.averageRating}</span>
            </div>
            <div className="text-xs text-gray-600 mt-2">
              <p>No of reviews: {book.reviews.length}</p>
              <p>Published On: {book.publishDate}</p>
              <p>Total Pages: {book.pages}</p>
              <p>Volume: {book.volume}</p>
              <p>Total Volumes: {book.totalVolumes}</p>
              {/* Tags Section */}
              <p>Genre: </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {Array.isArray(book.genre) ? (
                  book.genre.map((g, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-gray-200 rounded">{g}</span>
                  ))
                ) : (
                  <span className="px-2 py-1 text-xs bg-gray-200 rounded">{book.genre || "Unknown"}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Title and Details Section */}
        <div className="mt-3 flex-grow">
          <h2 className="text-lg font-bold truncate">{book.name}</h2>
          <p className="text-gray-700 italic text-sm">by {book.author}</p>
          <p className="mt-2 text-xs text-gray-600">
            {book.description && book.description.length > 250
              ? `${book.description.slice(0, 250)}...`
              : book.description || "No description available"}
            {book.description && book.description.length > 250 && (
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => handleMoreClick(book)}
              >
                more
              </span>
            )}
          </p>
        </div>

        {/* Buttons Section */}
        <div className="mt-3 flex justify-between items-center relative">
          <button
            className="px-3 py-1 text-sm font-semibold bg-gray-300 rounded hover:bg-gray-400 flex-shrink-0"
            onClick={() => onReviewClick(book)}
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
    </>
  );
};

export default BookCard;
