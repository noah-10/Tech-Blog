const router = require('express').Router();
const { User, Blog } = require('../models');
// Require path files

// Fetch for homepage


//Get all blogs with users

router.get('/', async (req, res) => {
    try{
        const allBlogs = await Blog.findAll({
            include: {model: User}
        });

        //serialize data so template can read the data better
        const blogs = allBlogs.map(blog => blog.get({ plain: true }));

        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in
        });

    }catch (err){
        res.json("Error with getting all projects", err);
    }
})

module.exports = router; 