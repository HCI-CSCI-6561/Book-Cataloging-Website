import React, { useState }  from 'react';
import { AiOutlineSearch } from "react-icons/ai"; 
import { IoIosArrowDropdown } from "react-icons/io"; 
import { genres, mockBooks } from "../mockdata";

function FilterSection({ onFilterChange }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [pages, setPages] = useState(800); // Default max pages
    const [publishYear, setPublishYear] = useState({ from: "", to: "" });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const currentYear = new Date().getFullYear(); // Get the current year
    const [error, setError] = useState(""); // State for error messages

    // Generate a list of years for the dropdown
    const years = Array.from({ length: currentYear - 1800 + 1 }, (_, i) => 1800 + i).reverse();

        // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        applyFilters(selectedGenres, pages, query);
    };

        // Update genre selection
    const toggleGenre = (genre) => {
        const updatedGenres = selectedGenres.includes(genre)
        ? selectedGenres.filter((g) => g !== genre)
        : [...selectedGenres, genre];
        setSelectedGenres(updatedGenres);
        applyFilters(updatedGenres, pages);
    };

    // Update page range
    const handlePageChange = (e) => {
        const selectedPages = parseInt(e.target.value, 10);
        if (!isNaN(selectedPages)) {
          setPages(selectedPages);
          applyFilters(selectedPages);
        }
      };

      const validateYear = (year, type) => {
        if (year && (!/^[0-9]{4}$/.test(year) || (type === "to" && year > currentYear))) {
            setError(`Invalid year: ${type === "to" ? 'To year cannot exceed ' + currentYear : 'Use YYYY format'}`);
            return false;
        }
        setError("");
        return true;
    };
    
    // const handleYearChange = (type, value) => {
    // if (validateYear(value, type)) {
    //     const updatedPublishYear = { ...publishYear, [type]: value };
    //     if (type === "to" && (!value || parseInt(value) > currentYear)) {
    //     updatedPublishYear.to = currentYear.toString();
    //     }
    //     setPublishYear(updatedPublishYear);
    //     applyFilters(selectedGenres, pages, searchQuery, updatedPublishYear, selectedRatings);
    // }
    // };
    const handleYearChange = (type, value) => {
        if (validateYear(value, type)) {
            setPublishYear(prev => ({ ...prev, [type]: value }));
        }
    };
    


    // Apply filters: genres, pages, search query, and publish year
    // Handle rate checkbox toggle
    const toggleRating = (star) => {
        const updatedRatings = selectedRatings.includes(star)
        ? selectedRatings.filter((r) => r !== star)
        : [...selectedRatings, star];
        setSelectedRatings(updatedRatings);
        applyFilters(selectedGenres, pages, searchQuery, publishYear, updatedRatings);
    };

    const applyFilters = (genres = [], maxPages = 800, query = "", yearRange = {}, ratings = []) => {
        const filteredBooks = mockBooks.filter((book) => {
          const matchesGenre =
            genres.length === 0 || book.genre.some((g) => genres.includes(g));
          const matchesPages = book.pages <= maxPages;
          const matchesSearch =
            book.name.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query);
          const bookYear = parseInt(book.publishDate.split("-")[0], 10);
          const matchesYear =
            (!yearRange?.from || bookYear >= parseInt(yearRange.from || "0", 10)) &&
            (!yearRange?.to || bookYear <= parseInt(yearRange.to || "9999", 10));
          const matchesRating =
            ratings.length === 0 || ratings.includes(Math.round(book.averageRating));
      
          return matchesGenre && matchesPages && matchesSearch && matchesYear && matchesRating;
        });
      
        onFilterChange(filteredBooks);
      };

  return (
    <div>
      {/* Sidebar */}
      <aside className="w-72 bg-neutral-100 p-6 border-r">

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Book/Author"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none"
        />
        <AiOutlineSearch className="absolute top-2 right-2 text-gray-500 size-5 hover" />
      </div>

      <div className="border-b border-gray-300 mb-1"></div> 


      {/* Filter */}
      <h2 className="font-bold mb-3">FILTER</h2>


      {/* Genre Filter */}
      <div className="mb-6">
        <p className="filter-section-subheading">GENRE</p>
        <div className="flex flex-col space-y-2">
          {genres.map((genre) => (
            <label key={genre} className="filter-section-label">
              <input
                type="checkbox"
                className="common-checkbox"
                onChange={() => toggleGenre(genre)}
                checked={selectedGenres.includes(genre)}
              />
              <span className="ml-2">{genre}</span>
            </label>
          ))}
        </div>
      </div>

      

      {/* Page Filter */}
      <div className="mb-6">
        <p className="filter-section-subheading">No. of Pages</p>
        <div className="flex flex-col items-center">
          <input
            type="range"
            min="0"
            max="800"
            value={pages}
            onChange={handlePageChange}
            className="w-full"
          />
          <span className="text-xs text-gray-600 mt-2">
            Up to {pages} pages
          </span>
        </div>
      </div>

      {/* Publish Year Filter */}
      <div className="mb-6">
        <h3 className="filter-section-subheading">Publish Year</h3>
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">From</label>
            <input
              type="text"
              list="years"
              placeholder="YYYY or select"
              value={publishYear.from || ""}
              onChange={(e) => handleYearChange("from", e.target.value)}
              className={`w-full px-2 py-1 text-sm border ${
                error && publishYear.from ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none`}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">To</label>
            <input
              type="text"
              list="years"
              placeholder="YYYY"
              value={publishYear.to || ""}
              onChange={(e) => handleYearChange("to", e.target.value)}
              className={`w-full px-2 py-1 text-sm border ${
                error && publishYear.to ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none`}
            />
          </div>
        </div>
        <datalist id="years">
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </datalist>
        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      </div>

      {/* Rate Filter */}
      <div className="mb-6">
        <h3 className="filter-section-subheading">Rate</h3>
        <div className="flex flex-col space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <label key={star} className="filter-section-label">
              <input
                type="checkbox"
                className="common-checkbox"
                checked={selectedRatings.includes(star)}
                onChange={() => toggleRating(star)}
              />
              <span className="ml-2 text-sm text-gray-700">
                {star} Star{star > 1 && "s"}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Apply
      </button>
    </aside>
      
    </div>
  )
}

export default FilterSection
