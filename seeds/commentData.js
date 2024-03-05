const { Comment } = require('../models');

const commentData = [
    {
        comment: "Very good",
        user_id: 1,
    },
    {
        comment: "Very Interesting!",
        user_id: 2,
    },
    {
        comment: "I justt started learning about that too!",
        user_id: 3,
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;