/*
 * @Author: Diana Tang
 * @Date: 2024-10-09 17:12:04
 * @LastEditors: Diana Tang
 * @Description: 
 * ,
  "proxy": "http://localhost:5001"这个配置在package中不会生效
 * @FilePath: /blog-frontend/src/App.js
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Blog from './pages/Blog'
import Sidebar from './components/Sidebar';
import MainContent from './pages/MainContent';
import Header from './components/Header';


function App() {
  return (
    // 左右布局
    <div className='flex min-h-screen md-h-screen'>
      {/* <Blog/> */}
      <Header/>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;