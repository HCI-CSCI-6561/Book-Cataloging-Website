import React, { useState }from "react";
import { MdHome } from "react-icons/md"; // Home icon
import { BsSortAlphaDown, BsSortAlphaDownAlt, BsSortNumericDown, BsSortNumericDownAlt } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";



export default function NavHeader({ onSortChange }) {
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

  // Sort options
  const [sortOption, setSortOption] = useState("");
  const [sortDirection, setSortDirection] = useState("asc"); //ascor dec state of sort
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortChange = (option) => {
    const newDirection = sortOption === option && sortDirection === "asc" ? "desc" : "asc";
    setSortOption(option);
    setSortDirection(newDirection);

    // Notify parent component
    onSortChange({ option, direction: newDirection });
    setIsDropdownOpen(false);
  };
  
  // Helper to render correct icon
  const getIconForSortOption = (option) => {
    const commonClasses = "size-4";
    if (option === "book_title" || option === "author_name") {
      return sortDirection === "asc" ? <BsSortAlphaDown className={commonClasses}  /> : <BsSortAlphaDownAlt className={commonClasses} />;
    }
    if (option === "publish_date") {
      return sortDirection === "asc" ? <BsSortNumericDown className={commonClasses} /> : <BsSortNumericDownAlt className={commonClasses} />;
    }
    return null;
  };

  // Map for option labels
  const optionLabels = {
    publish_date: "Publish Date",
    book_title: "Book Title",
    author_name: "Author"
  };


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

      {/* Sort Dropdown: Only visible in booklisting */}
      {pathname === "/booklisting" && (
      <div className="flex items-center">
      <p className="mr-2 text-sm">Sort by:{" "}</p>
        <button
          className="border rounded px-3 py-1 text-sm flex items-center"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <span className="flex items-center space-x-2">
            <span>{sortOption ? optionLabels[sortOption] : "Select"}</span>
            <span>{sortOption ? getIconForSortOption(sortOption) : <BiSortAlt2 className="" />}</span>
          </span>
       
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-48 z-10">
            <div
              className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
              onClick={() => handleSortChange("publish_date")}
            >
              {getIconForSortOption("publish_date")} <span className="ml-2">Publish Date</span>
            </div>
            <div
              className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
              onClick={() => handleSortChange("book_title")}
            >
              {getIconForSortOption("book_title")} <span className="ml-2">Book Title</span>
            </div>
            <div
              className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
              onClick={() => handleSortChange("author_name")}
            >
              {getIconForSortOption("author_name")} <span className="ml-2">Author</span>
            </div>
          </div>
        )}
      </div>
    )}
    </nav>
    </div>
  );
}
