// will contain post and logging out

const router = require('express').Router();
const User = require('../../models/User');

//Create user
router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json(userData);
        });
    }catch(err){
        res.json({message: "Error with creating profile", err});
    }
});

//Logging in
router.post('/login', async (req,res) => {
    try{
        const userData = await User.findOne({ where: {username: req.body.username}});

        if(!userData){
            res.status(400).json({message: "Incorrect username or password, please try again"});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword){
            res.status(400).json({message: "Incorrect username or password, please try again"});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: "You are now logged in!"});
        });
    }catch(err){
        res.json({message: "Error with loggin in", err})
    }
});

// Logging out route
router.post('/logout', async (req,res) => {
    if(req.session.logged_in){
        req.session.destroy(() => {
            res.status(204).end();
        });
    }else {
        res.status(404).end();
    }
});

module.exports = router;