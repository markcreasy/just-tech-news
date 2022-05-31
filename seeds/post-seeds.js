const { Post } = require('../models');

const postData = [
  {
    title: 'Interesting Article 1',
    post_url: 'http://www.google.com',
    user_id: 1
  },
  {
    title: 'Not that interesting article 2',
    post_url: 'http://www.google.com',
    user_id: 1
  },
  {
    title: 'Intriguing article 3',
    post_url: 'http://www.google.com',
    user_id: 2
  },
  {
    title: 'Fake news article 4',
    post_url: 'http://www.google.com',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
