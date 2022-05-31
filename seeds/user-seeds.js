const { User } = require('../models');

const userData = [
  {
    username: 'mark',
    email: 'mail@mail.com',
    password: 'pass'
  },
  {
    username: 'marissa',
    email: 'mail2@mail.com',
    password: 'pass'
  },
  {
    username: 'emily',
    email: 'mail3@mail.com',
    password: 'pass'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
