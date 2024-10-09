/*
 * @Author: Diana Tang
 * @Date: 2024-10-10 00:18:10
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /blog-frontend/src/components/Header.js
 */
import React from 'react';

const Header = () => {
    return (
      <header className="w-full bg-gray-100 p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Tailwind CSS Logo" className="h-8 mr-3" />
          <span className="text-xl font-bold">tailwindcss</span>
          <span className="ml-2 text-sm text-gray-600">v3.4.13</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-blue-600 hover:underline">Introducing Catalyst</a>
          <a href="#" className="text-blue-600 hover:underline">A modern application UI kit for React</a>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-800 hover:underline">Docs</a>
          <a href="#" className="text-gray-800 hover:underline">Components</a>
          <a href="#" className="text-gray-800 hover:underline">Blog</a>
          <a href="#" className="text-gray-800 hover:underline">Showcase</a>
          <button className="focus:outline-none">
            <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h1M3 12H2m16.485 6.485l-.707-.707M4.222 19.778l-.707-.707M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
            </svg>
          </button>
          {/* <a href="https://github.com" className="text-gray-800 hover:underline">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.23c-3.338.727-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.084-.73.084-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.835 2.805 1.305 3.492.997.11-.775.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.65.242 2.872.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.815 1.096.815 2.21v3.283c0 .32.22.693.825.577C20.565 21.798 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a> */}
        </nav>
      </header>
    );
  };

export default Header;