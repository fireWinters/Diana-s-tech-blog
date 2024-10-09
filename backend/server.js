/*
 * @Author: Diana Tang
 * @Date: 2024-10-09 16:41:35
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /Diana-s-tech-blog/backend/server.js
 */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// 博客文章模型
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});
const Post = mongoose.model('Post', PostSchema);

// 中间件
app.use(express.json());

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