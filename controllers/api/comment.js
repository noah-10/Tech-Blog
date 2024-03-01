const router = require('express').Router();
const Comment = require('../../models/Comment');
const BlogComment = require('../../models/BlogComment');
const withAuth = require('../../utils/withAuth');

//Create new comment

router.post('/', withAuth, async (req, res) => {
    
    try{
        const newComment = await Comment.create({
            comment: req.body.comment,
            user_id: req.session.user_id,
        });

        const commentId = newComment.id;

        const updatedBlogComment = await BlogComment.create({
            comment_id: commentId,
            blog_id: req.body.blogId
        })

        res.json({newComment, updatedBlogComment});
    }catch(err){
        res.json({message: "Error with making comment", err});
    }
})

module.exports = router;