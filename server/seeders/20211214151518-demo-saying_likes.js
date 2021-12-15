'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('saying_likes', [
    {
      id: 1,
      user_id: 1,
      saying_id: 1
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('saying_likes', null, {})
  }
};
