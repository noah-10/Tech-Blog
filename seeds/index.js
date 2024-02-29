const sequalize = require('../config/connection');
const seedUserData = require('./userData');
const seedBlogData = require('./blogData');
const seedCommentData = require('./commentData');
const seedBlogComment = require('./blogCommentData');

const seedDatabase = async () => {
    await sequalize.sync({ force: true });

    await seedUserData();
    console.log("Seeded user data");

    await seedBlogData();
    console.log("Seeded blog data");

    await seedCommentData();
    console.log("Seed Comment data");

    await seedBlogComment();
    console.log("Seeded blog comments");

    process.exit(0);
}

seedDatabase();