import React from 'react';

export default function NavBar() {
  return (
    <div className='home_nav_bar'>
        <nav>
            <a href='#' className='logo'>Logo</a>
            <div className='flex items-center'>
              <ul>
                <li>Log In</li>
                <li>Sign Up</li>
              <button
                // onClick={toggleDropdown}
                className='profile_dropdown'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ece4e4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user drop-shadow-lg">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/></svg>
              </button>
              </ul>
              <button className='menu-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ece4e4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify">
                <path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
              </button>
            </div>
        </nav>
    </div>
  )
}

