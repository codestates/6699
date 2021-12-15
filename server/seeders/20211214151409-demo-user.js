'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      id: 1,
      email: 'joy@gmail.com',
      password: '1234',
      username: 'joykim',
      image: '',
      introduction: 'Hi, I am handsome guy thanks for your digits',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
