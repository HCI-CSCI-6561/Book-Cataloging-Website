// import React, { useState,useContext } from "react";
// import { useNavigate } from "react-router-dom";   
// import LoginPage from "./LoginPage";
// import { AuthContext } from "../contexts/AuthContext"; 

// export default function NavBar({ currentPage}) {
//   const { isSignedIn, user, logout } = useContext(AuthContext);
//   // const [isSignedIn, setIsSignedIn] = useState(false); // Track sign-in state
//   const [showModal, setShowModal] = useState(false); // Track modal visibility
//   const navigate = useNavigate();

//   // const handleLogin = () => {
//   //   setIsSignedIn(true); // Simulate login
//   //   setShowModal(false); // Close modal after login
//   // };

//   // const handleLogout = () => {
//   //   setIsSignedIn(false); // Simulate logout
//   // };
//   const goToBookListing = () => {
//     navigate("/booklisting"); // Navigate to the BookListing page
//   };
//   const goToBookshelf = () => {
//     navigate("/bookshelf"); // Navigate to the Bookshelf page
//   };

//   return (
//     <>
//     <div className="bg-[#3c3a3a] py-3 px-6 flex items-center justify-between">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           fill="none"
//           stroke="#fff"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-book"
//         >
//           <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
//           <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5a2.5 2.5 0 0 0-2.5 2.5z" />
//           <path d="M16 2v15" />
//         </svg>
//         <span className="text-white font-bold text-lg">BookNest</span>
//       </div>

//       {/* Show Search Bar only on Homepage */}
//       {window.location.pathname === "/home"  && (
//         <>
//           {/* Search Bar */}
//           <div className="flex items-center bg-slate-100 px-4 py-2 rounded-full">
//             <input
//               type="text"
//               placeholder="Search Book/Author"
//               className="bg-transparent text-black placeholder-black focus:outline-none text-sm"
//             />
//             <AiOutlineSearch className="text-black ml-2" />
//           </div>
//         </>
//       )}

//       {/* Right Section - Signup/Login or Logout */}
//       <div className="text-white flex items-center space-x-2">

//           <button
//             onClick={goToBookListing}
//             className="px-3 py-2 text-sm font-semibold bg-steal-500 text-white rounded hover:underline focus:outline-none"
//           >
//             Browse Books
//           </button>
//           <button
//             onClick={goToBookshelf}
//             className="px-3 py-2 text-sm font-semibold bg-steal-500 text-white rounded hover:underline focus:outline-none"
//           >
//             Bookshelf
//           </button>

//           {isSignedIn ? (
//             <button
//               onClick={handleLogout}
//               className="px-3 py-2 text-sm font-semibold text-white hover:underline focus:outline-none"
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               onClick={() => setShowModal(true)}
//               className="px-3 py-2 text-sm font-semibold text-white hover:underline focus:outline-none"
//             >
//               SignUp / LogIn
//             </button>
            
//           )}
          
//         </div>
        
//         {/* Modal for Login */}
//         {showModal && <LoginPage closeModal={() => setShowModal(false)} onLogin={handleLogin} />}
//     </div>
//     </>
//   );
// }

import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import { AiOutlineSearch } from "react-icons/ai";

export default function NavBar({ currentPage}) {
    const { isSignedIn, user, logout } = useContext(AuthContext); // Access auth state
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); 

    const handleLogin = () => {
    //  setIsSignedIn(true); // Simulate login
      setShowModal(false); // Close modal after login
      };

    const goToBookshelf = () => navigate("/bookshelf");
    const goToBookListing = () => navigate("/booklisting");

    return (
        <div className="bg-[#3c3a3a] py-3 px-6 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5a2.5 2.5 0 0 0-2.5 2.5z" />
                    <path d="M16 2v15" />
                </svg>
                <span className="text-white font-bold text-lg">BookNest</span>
            </div>

            {/* Show Search Bar only on Homepage */}
            {window.location.pathname === "/home" && (
              <>
              {/* Search Bar */}
                <div className="flex items-center bg-slate-100 px-4 py-2 rounded-full">
                    <input type="text" placeholder="Search Book/Author" className="bg-transparent text-black placeholder-black focus:outline-none text-sm" />
                    <AiOutlineSearch className="text-black ml-2" />
                </div>
              </>
            )}

            {/* Right Section - Signup/Login or Logout */}
            <div className="text-white flex items-center space-x-6">
                <button onClick={goToBookListing} className="px-4 py-2 text-sm font-semibold bg-steal-500 text-white rounded hover:underline focus:outline-none">Browse Books</button>
                <button onClick={goToBookshelf} className="px-4 py-2 text-sm font-semibold bg-steal-500 text-white rounded hover:underline focus:outline-none">Bookshelf</button>

                {isSignedIn ? (
                    <>
                        {/* <span className="text-sm text-white font-semibold"></span> */}
                        <button onClick={logout} className="px-4 py-2 text-sm font-semibold text-white hover:underline focus:outline-none">Logout</button>
                    </>
                ) : (
                  <button
                      onClick={() => setShowModal(true)}
                      className="px-3 py-2 text-sm font-semibold text-white hover:underline focus:outline-none"
                  >
                      SignUp / LogIn
                    </button>
                    /* <button onClick={() => navigate("/login")} className="px-4 py-2 text-sm font-semibold text-white hover:underline focus:outline-none">SignUp / LogIn</button> */
                )}
            </div>

            {/* Modal for Login */}
           {showModal && <LoginPage closeModal={() => setShowModal(false)} onLogin={handleLogin} />}
        </div>
    
    );
}