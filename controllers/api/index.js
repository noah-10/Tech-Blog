const router = require('express').Router();
const userRoutes = require('./user');
const blogRoutes = require('./blog');
const commentRoute = require('./comment');

router.use('/comment', commentRoute);
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;