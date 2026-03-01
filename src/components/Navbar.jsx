import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <NavLink to="/" className="text-2xl font-bold text-indigo-600 tracking-wide hover:scale-105 transition-transform">
          NotesApp
        </NavLink>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-500 text-white px-4 py-2 rounded-lg"
                : "text-gray-700 px-4 py-2 rounded-lg font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-500  text-white px-4 py-2 rounded-lg"
                : "text-gray-700 px-4 py-2 rounded-lg font-medium"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
