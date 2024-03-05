const { Blog } = require('../models');

const blogData = [
  {
    "title": "Mysql",
    "content": "I just learned about using a database called mysql, and I really enjoy it!",
    "user_id": 1
  },
  {
    "title": "FrontEnd",
    "content": "I really enjoy using handleBars. Being able to have templates for different sections of my webpage make it very dynamic.",
    "user_id": 2
  },
  {
    "title": "JavaScript",
    "content": "The more I've been researching about JavaScript, the more and more I learn. It's like it never ends.",
    "user_id": 3
  }
]

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;