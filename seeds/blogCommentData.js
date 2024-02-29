const { BlogComment } = require('../models');

const blogCommentData = [
    {
        comment_id: 1,
        blog_id: 2
    },
    {
        comment_id: 2,
        blog_id: 3
    },
    {
        comment_id: 3,
        blog_id: 1
    }
    
];

const seedBlogComment = () => BlogComment.bulkCreate(blogCommentData);

module.exports = seedBlogComment;