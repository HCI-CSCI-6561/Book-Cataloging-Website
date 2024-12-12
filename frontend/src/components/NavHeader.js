import React , { useState } from "react";
import { MdHome } from "react-icons/md"; // Home icon
import { Link, useLocation } from "react-router-dom";


export default function NavHeader() {
  const location = useLocation(); // Get the current location
  const pathname = location.pathname; // Extract the path

  // Define breadcrumb mapping
  const breadcrumbs = {
    "/home": "HomeBlock",
    "/booklisting": "Book Listing",
    "/bookdetails": "Book Details",
    "/login": "Login",
    "/bookshelf": "Bookshelf"
  };

  // Generate breadcrumb trail
  const breadcrumbTrail = pathname.split("/").filter(Boolean);

  // // Sort options
  // const [sortOption, setSortOption] = useState("");

  // const handleSortChange = (e) => {
  //   const selectedOption = e.target.value;
  //   setSortOption(selectedOption);
  //   onSortChange(selectedOption); // Pass selected sort option to parent
  // };

  return (
    <div>
      <nav className="bg-white border-b px-6 py-2 flex justify-between items-center text-gray-700">
        {/* Breadcrumbs */}
        <div className="text-sm flex items-center space-x-2">
          {/* Home Icon with Link */}
          <Link to="/home" className="flex items-center space-x-1 hover">
            <MdHome className="text-lg" />
            <span>Home</span>
          </Link>

          {breadcrumbTrail.map((crumb, index) => {
            const path = `/${breadcrumbTrail.slice(0, index + 1).join("/")}`;
            return (
              <React.Fragment key={crumb}>
                <span className="text-gray-500">/</span> {/* Separator */}
                {breadcrumbs[path] ? (
                  <Link
                    to={path}
                    className={`flex items-center ${
                      index === breadcrumbTrail.length - 1
                        ? "active hover"
                        : "text-gray-500 hover"
                    }`}
                  >
                    <span>{breadcrumbs[path]}</span>
                  </Link>
                ) : (
                  <span className="text-gray-500">{crumb}</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Sort Dropdown
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm">
            Sort by:
          </label>
          <select
            id="sort"
            className="border rounded px-2 py-1 text-sm"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="publish_date">Publish Date</option>
            <option value="book_title">Book Title</option>
            <option value="author_name">Author</option>
          </select>
        </div> */}

      </nav>
    </div>
  );
}
