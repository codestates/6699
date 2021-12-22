'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      id: 1,
      email: 'admin',
      password: '12341234',
      username: 'admin',
      image: '',
      introduction: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 1
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
