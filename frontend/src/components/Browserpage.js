import React, { useState } from "react";

const genres = ["Fiction", "Non-Fiction", "Fantasy", "Mystery", "Science Fiction"];
const sortOptions = [
  { name: "Author (A-Z)", value: "author" },
  { name: "Book Name (A-Z)", value: "book" },
  { name: "Date of Publish", value: "date" },
];

const Browserpage = () => {
  const [filters, setFilters] = useState({
    genre: "",
    minPages: "",
    maxPages: "",
    minReviews: "",
    maxReviews: "",
    volumes: "",
  });
  const [sortBy, setSortBy] = useState(sortOptions[0].value);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters:", filters);
    console.log("Sort By:", sortBy);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Genre Filter */}
        <div>
          <label htmlFor="genre" className="block text-gray-700 font-medium">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            className="w-full border border-gray-300 rounded-md p-2"
            value={filters.genre}
            onChange={handleFilterChange}
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Pages Filter */}
        <div>
          <label className="block text-gray-700 font-medium">Number of Pages</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="minPages"
              placeholder="Min Pages"
              className="w-1/2 border border-gray-300 rounded-md p-2"
              value={filters.minPages}
              onChange={handleFilterChange}
            />
            <input
              type="number"
              name="maxPages"
              placeholder="Max Pages"
              className="w-1/2 border border-gray-300 rounded-md p-2"
              value={filters.maxPages}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Reviews Filter */}
        <div>
          <label className="block text-gray-700 font-medium">Reviews</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="minReviews"
              placeholder="Min Reviews"
              className="w-1/2 border border-gray-300 rounded-md p-2"
              value={filters.minReviews}
              onChange={handleFilterChange}
            />
            <input
              type="number"
              name="maxReviews"
              placeholder="Max Reviews"
              className="w-1/2 border border-gray-300 rounded-md p-2"
              value={filters.maxReviews}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Volumes Filter */}
        <div>
          <label htmlFor="volumes" className="block text-gray-700 font-medium">
            Volumes
          </label>
          <input
            type="number"
            id="volumes"
            name="volumes"
            placeholder="Number of Volumes"
            className="w-full border border-gray-300 rounded-md p-2"
            value={filters.volumes}
            onChange={handleFilterChange}
          />
        </div>

        {/* Sort By */}
        <div>
          <label htmlFor="sortBy" className="block text-gray-700 font-medium">
            Sort By
          </label>
          <select
            id="sortBy"
            name="sortBy"
            className="w-full border border-gray-300 rounded-md p-2"
            value={sortBy}
            onChange={handleSortChange}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium rounded-md p-2 hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default Browserpage;
