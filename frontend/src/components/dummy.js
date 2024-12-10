<nav className="bg-white border-b px-6 py-2 flex justify-between items-center text-gray-700">
        {/* Breadcrumbs */}
        <div className="text-sm flex items-center space-x-2">
          {/* Home Icon with Link */}
          <a href="/" className="flex items-center space-x-1 hover:text-blue-600 transition">
            <MdHome className="text-lg" />
            <span>Home</span>
          </a>
          <span className="text-gray-500">/</span> {/* Separator */}
          
          {/* Book Listing Icon with Link */}
          <a href="/book-listing" className="flex items-center space-x-1 font-bold underline  hover:text-blue-600 transition">
            <span>Book Listing</span>
          </a>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 bg-white rounded px-3 py-2 text-sm focus:outline-none  hover:text-blue-600 focus:ring-2 focus:ring-teal-300"
          >
            <option disabled selected>
              Sort by
            </option>
            <option value="Name A-Z">Name A-Z</option>
            <option value="Author A-Z">Author A-Z</option>
            <option value="Date">Date of Publish</option>
          </select>
        </div>
      </nav>