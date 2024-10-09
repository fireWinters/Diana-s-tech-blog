/*
 * @Author: Diana Tang
 * @Date: 2024-10-09 23:57:30
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /blog-frontend/src/components/Sidebar.js
 */
import React,{useState,useEffect} from 'react';

import SIDEBAR from '../utils/Url';

import siderData from '../Mock'

const Sidebar = () => {
    const [menuItems, setMenuItems] = useState(siderData||[]);
  
    useEffect(() => {
      // Fetch sidebar data from API
      // fetch(SIDEBAR).then((response) => response.json())
      //   .then((data) => setMenuItems(data))
      //   .catch((error) => console.error('Error fetching sidebar data:', error));
    }, []);
  
    return (
      <aside className="w-64 bg-gray-100 p-6">
        <div className="text-2xl font-bold mb-6">Tailwind CSS</div>
        <nav>
          <ul>
            {menuItems.length > 0 ? (
              menuItems.map((item, index) => (
                <li key={index} className="mb-3">
                  <a href={item.link} className="text-blue-600 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </nav>
      </aside>
    );
  };
export default Sidebar