const router = require('express').Router();
const userRoutes = require('./user');
const blogRoutes = require('./blog');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;