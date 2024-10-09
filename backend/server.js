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
const dns = require('dns');
const app = express();
const PORT = process.env.PORT || 5001;

// 替换 MongoDB Atlas 连接字符串中的集群名称
const MONGO_URI ='mongodb+srv://Cluster70067:QlhZdFpWZUpl@cluster0.mongodb.net/blog?retryWrites=true&w=majority'
// 连接 MongoDB 数据库
// mongoose.connect(MONGO_URI)
// mongoose.connect('mongodb://localhost:27017/blog')
// .then(() => console.log('MongoDB Connected'))
// .catch(err => {
//   console.log('MongoDB connection error:', err);
//   // dns.lookup('cluster0.mongodb.net', (dnsErr, address) => {
//   //   if (dnsErr) {
//   //     console.error('DNS lookup failed:', dnsErr);
//   //   } else {
//   //     console.log('DNS lookup success, IP:', address);
//   //   }
//   // });
// });

// 中间件
app.use(cors()); // 允许所有来源的跨域请求
app.use(express.json());
// 临时存储博客文章
let posts = [];

// // 博客文章模型
// const PostSchema = new mongoose.Schema({
//   title: String,
//   content: String,
//   date: { type: Date, default: Date.now }
// });
// const Post = mongoose.model('Post', PostSchema);

// 获取所有博客文章
app.get('/api/posts', async (req, res) => {
  // const posts = await Post.find();
  res.json(posts);
});

// 创建新的博客文章
app.post('/api/posts', async (req, res) => {
  console.log('Received data:', req.body); // 添加日志，打印前端发送的数据
  // const newPost = new Post({
  //   title: req.body.title,
  //   content: req.body.content
  // });
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    date: new Date()
  };
  // await newPost.save();
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
