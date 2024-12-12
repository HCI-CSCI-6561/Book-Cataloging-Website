import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function HomeBlock() {

  return (
<>
<NavBar currentPage="homepage" /> 
        <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto">
          
            <div>
                <h1 className="text-6xl font-black mb-2 text-[#37be4e]">
                    WELCOME TO THE
                </h1>
                <p className="text-6xl font-black mb-2 text-primary">
                    BOOK NEST
                </p>
                <p className="text-secondary font-semibold text-xl">
                    Step closer and allow the words to beckon you into their magical embrace.
                </p>
                <div className="text-primary mt-16">
                    <p>Come, dear reader, and lose yourself in the magic</p>
                    <p>And wonder that awaits within the BOOK NEST</p>
                </div>
                <div className="mt-5">
                    <Link 
                        to="/booklisting" 
                        className="bg-[#37be4e] text-white uppercase py-3 px-6 rounded shadow hover:bg-[#2d9f3c] transition-all"
                    >
                        Browse All Books
                    </Link>
                </div>
            </div>
            <div className="w-1/2 relative -right-14">
                <img
                    src="https://pbs.twimg.com/media/DiFppRfW0AEVYdG.png"
                    alt="Bookshelf"
                    className="w-full h-auto"
                />
            </div>
        </div>
        </>
  );
}

export default HomeBlock;