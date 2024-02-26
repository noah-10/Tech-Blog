const sequalize = require('../config/connection');
const seedUserData = require('./userData');
const seedBlogData = require('./blogData');

const seedDatabase = async () => {
    await sequalize.sync({ force: true });

    await seedUserData();
    console.log("Seeded user data");

    await seedBlogData();
    console.log("Seeded blog data");

    process.exit(0);
}

seedDatabase();