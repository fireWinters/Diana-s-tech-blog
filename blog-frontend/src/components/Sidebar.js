/*
 * @Author: Diana Tang
 * @Date: 2024-10-09 23:57:30
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /blog-frontend/src/components/Sidebar.js
 */
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-6">
      <div className="text-2xl font-bold mb-6">Tailwind CSS</div>
      <nav>
        <ul>
          <li className="mb-3">
            <a href="#" className="text-blue-600 hover:underline">Installation</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-blue-600 hover:underline">Editor Setup</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-blue-600 hover:underline">Core Concepts</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-blue-600 hover:underline">Optimizing for Production</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-blue-600 hover:underline">Browser Support</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar