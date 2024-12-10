import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";  
import LoginPage from "./LoginPage";

export default function NavBar({ currentPage, isSignedIn, handleLogout }) {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <div className="bg-[#3c3a3a] py-3 px-6 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-book"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5a2.5 2.5 0 0 0-2.5 2.5z" />
          <path d="M16 2v15" />
        </svg>
        <span className="text-white font-bold text-lg">BookNest</span>
      </div>

      {/* Show Search Bar only on Homepage */}
      {currentPage === "homepage" && (
        <>
          {/* Search Bar */}
          <div className="flex items-center bg-[#3f2929] px-4 py-2 rounded-full">
            <input
              type="text"
              placeholder="Search Book/Author"
              className="bg-transparent text-white placeholder-gray-300 focus:outline-none text-sm"
            />
            <AiOutlineSearch className="text-white ml-2" />
          </div>
        </>
      )}

      {/* Right Section - Signup/Login or Logout */}
      <div className="text-white flex items-center space-x-6">
          {isSignedIn ? (
            <button
              onClick={handleLogout}
              className="text-sm hover:underline focus:outline-none"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 text-sm font-semibold text-white hover:underline focus:outline-none"
            >
              SignUp / LogIn
            </button>
            
          )}
        </div>
        
        {/* Modal for Login */}
        {showModal && <LoginPage closeModal={closeModal} />}
    </div>
    </>
  );
}
