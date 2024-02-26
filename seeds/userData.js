const { User } = require('../models')

const userData = [
  {
    "username": "noah.10",
    "email": "noahfryman@gmail.com",
    "password": "fryman10"
  },
  {
    "username": "rob.201",
    "email": "rob@gmail.com",
    "password": "rob201"
  },
  {
    "username": "ava.05",
    "email": "ava@gmail.com",
    "password": "ava05"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
