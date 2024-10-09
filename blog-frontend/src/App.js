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
import {POSTS} from './utils/Url'

const PROXY="http://localhost:5001"
function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // 获取所有博客文章
    axios.get(POSTS).then(res => setPosts(res.data))
    .catch(err => console.error('Error creating post:',err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 创建新的博客文章
    axios.post(POSTS, { title, content }).then(res => {
      setPosts([...posts, res.data]);
      setTitle('');
      setContent('');
    })
    .catch(err => console.error('Error creating post:',err));
  };
  return (
    <div className="App">
      <h1>个人博客</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="标题"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">发布</button>
      </form>
      <div className="posts">
        {posts.map(post => (
          <div key={post._id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;