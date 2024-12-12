import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavHeader from "./NavHeader";
import NavBar from "./NavBar";
import {mockBooks} from "../mockdata"; // Import mock data

const Bookshelf = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([
    { name: "Reviewed by You", books: [], sortType: "author", isDropdownOpen: false },
    { name: "Currently Reading", books: [], sortType: "author", isDropdownOpen: false },
    { name: "Read by Me", books: [], sortType: "author", isDropdownOpen: false },
    { name: "Want to Read", books: [], sortType: "author", isDropdownOpen: false },
  ]);

  useEffect(() => {
    // Dynamically allocate books to categories based on their data
    const reviewedBooks = mockBooks.filter((book) => book.userRatings && book.userRatings.length > 0);
    const currentlyReading = mockBooks.slice(0, 2); // Example for currently reading
    const wantToRead = mockBooks.slice(2, 4); // Example for want-to-read books
    const readByMe = mockBooks.slice(4, 6); // Example for already-read books

    setCategories([
      { ...categories[0], books: reviewedBooks },
      { ...categories[1], books: currentlyReading },
      { ...categories[2], books: readByMe },
      { ...categories[3], books: wantToRead },
    ]);
  }, []); // Run once when the component mounts

  const handleSort = (categoryIndex, type) => {
    const updatedCategories = [...categories];
    const sortedBooks = [...updatedCategories[categoryIndex].books].sort((a, b) => {
      if (type === "author") return a.author.localeCompare(b.author);
      if (type === "title") return a.name.localeCompare(b.name);
      return 0;
    });

    updatedCategories[categoryIndex].books = sortedBooks;
    updatedCategories[categoryIndex].sortType = type;
    updatedCategories[categoryIndex].isDropdownOpen = false;
    setCategories(updatedCategories);
  };

  const toggleDropdown = (index) => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) => ({
        ...category,
        isDropdownOpen: i === index ? !category.isDropdownOpen : false,
      }))
    );
  };

  const handleComment = (bookId) => {
    navigate(`/book/${bookId}/comments`);
  };

  return (
    <>
      <NavBar />
      <NavHeader />
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="gray-100, p-4 rounded-md shadow-md">
              <div className="flex justify-between items-center mb-4 relative">
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <button
                  onClick={() => toggleDropdown(categoryIndex)}
                  className="text-xl cursor-pointer"
                >
                  ⇅
                </button>
                {category.isDropdownOpen && (
                  <div className="absolute right-0 mt-8 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul>
                      <li
                        onClick={() => handleSort(categoryIndex, "author")}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Sort by Author (A to Z)
                      </li>
                      <li
                        onClick={() => handleSort(categoryIndex, "title")}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Sort by Title (A to Z)
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <p className="mb-4 text-sm">Total Books: {category.books.length}</p>
              <div className="space-y-4 mb-6">
                {category.books.map((book, bookIndex) => (
                  <div key={bookIndex} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex mb-3">
                      <img
                        src={book.image}
                        alt={book.name}
                        className="w-16 h-16 bg-gray-300 rounded-lg mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold">{book.name}</h3>
                        <p className="text-sm text-gray-600">by {book.author}</p>
                        <p className="text-xs text-gray-500 mt-1">Published: {book.publishDate}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => handleComment(book.id)}
                        className="text-blue-600 text-xl"
                      >
                        💬
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
