// Will contain post, put, delete for blogs
const router = require('express').Router();
const {Blog} = require('../../models');
const withAuth = require('../../utils/withAuth');

//create new blog
router.post('/', async (req, res) => {
    try{
        const newBlog = await Blog.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });

        res.json(newBlog);
    }catch(err){
        res.json({message: "Error with creating new blog" , err});
    }
});

//Updating blogs
router.put('/:id', withAuth, async (req, res) => {
    try{
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        })

        if(!blogData){
            res.json({message: "No blog found with this id!"});
            return;
        }
        
        res.json(blogData);
    }catch(err){
        res.json({message: "Error with updating blog"});
    }
});

//Deleting blogs
router.delete('/:id', withAuth, async (req, res) => {
    try{
        const deleteBlog = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        if(!deleteBlog){
            res.json({message: "No blog found with this id!"})
            return;
        }

        res.json(deleteBlog);
    }catch(err){
        res.json({message: "Error with deleting blog", err});
    }
})

module.exports = router;