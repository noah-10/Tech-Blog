const { Blog } = require('../models');

const blogData = [
  {
    "title": "How the world works by noah",
    "content": "ngefrjgnerjntgijertn",
    "user_id": 1
  },
  {
    "title": "Why chocolate is good by rob",
    "content": "ngefrjgnerjntgijertn",
    "user_id": 2
  },
  {
    "title": "Why am I sleepy by ava",
    "content": "ngefrjgnerjntgijertn",
    "user_id": 3
  }
]

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;