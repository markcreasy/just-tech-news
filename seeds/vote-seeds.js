const { Vote } = require('../models');

const voteData = [
  {
    user_id: 1,
    post_id: 1
  },
  {
    user_id: 1,
    post_id: 2
  },
  {
    user_id: 2,
    post_id: 1
  },
  {
    user_id: 2,
    post_id: 3
  },
  {
    user_id: 3,
    post_id: 1
  },
  {
    user_id: 3,
    post_id: 2
  },
];

const seedVotes = () => Vote.bulkCreate(voteData);

module.exports = seedVotes;
