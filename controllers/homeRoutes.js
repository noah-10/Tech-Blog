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
        res.json("Error with getting all blogs", err);
    }
});

// route for a single blog
router.get('/blog/:id', async (req, res) => {
    try{
        const blogData = await Blog.findByPk(req.params.id, {
            include: {model: User}
        })

        const blog = blogData.get({ plain: true });

        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in
        });
    }catch(err){
        res.json("Error with getting a single blog", err);
    }
});

//route for getting profile
// ADD AUTH AND AN ATTRIBTE FOR EXCLUDING PASSWORD
router.get('/dashboard', async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            include: {model: Blog}
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    }catch(err){
        res.json("Error with loading profile", err);
    }
});

// route for login
router.get('/login', async (req, res) => {

    //If user is already logged in, then it will redirect them
    if(req.session.logged_in){
        res.redirect('/dashboard')
        return;
    }

    res.render('login');
})

router.get('/sign-up', async (req, res) => {
    res.render('sign-up')
});

module.exports = router; 