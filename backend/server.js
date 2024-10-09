/*
 * @Author: Diana Tang
 * @Date: 2024-10-09 17:11:54
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /Diana-s-tech-blog/backend/server.js
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // 引入 CORS
const app = express();
const PORT = process.env.PORT || 6000;

// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/blog')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// 中间件
app.use(cors()); // 允许所有来源的跨域请求
app.use(express.json());

// 博客文章模型
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});
const Post = mongoose.model('Post', PostSchema);

// 获取所有博客文章
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// 创建新的博客文章
app.post('/api/posts', async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content
  });
  await newPost.save();
  res.json(newPost);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
