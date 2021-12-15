'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post_likes', [
    {
      id: 1,
      user_id: 1,
      post_id: 1
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('post_likes', null, {})
  }
};
