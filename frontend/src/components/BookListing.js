import React, { useState } from "react";
import BookCard from "./BookCard"; 
import NavBar from "./NavBar";
import NavHeader from "./NavHeader";
import FilterSection from "./FilterSection";
import { mockBooks } from "../mockdata";

const BookListing = () => {
  const [filteredBooks, setFilteredBooks] = useState(mockBooks); // State for filtered books

  // Handle filter updates from FilterSection
  const handleFilterChange = (updatedBooks) => {
    setFilteredBooks(updatedBooks);
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Header Section */}
        <NavBar />

      {/* Navigation Section */}
      <NavHeader />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <FilterSection onFilterChange={handleFilterChange} />
       

        {/* Book Listing Grid */}
        <main className="flex-1 p-6">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} /> // Pass book data as a prop
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No books match the selected filters.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default BookListing;