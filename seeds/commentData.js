const { Comment } = require('../models');

const commentData = [
    {
        comment: "Very good",
        user_id: 1,
        // blog_id: 2
    },
    {
        comment: "Very Interesting!",
        user_id: 2,
        // blog_id: 3
    },
    {
        comment: "I did not know that",
        user_id: 3,
        // blog_id: 1
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;