const sequalize = require('../config/connection');
const {User, Blog} = require('../models');

const userData = require('./userData');
const blogData = require('./blogData');

const seedDatabase = async () => {
    await sequalize.sync({ force: true });

    const user = await User.bulkCreate(userData);

    const blog = await Blog.bulkCreate(blogData);
}

seedDatabase();