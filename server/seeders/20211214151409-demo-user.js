'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
    {
      id: 1,
      email: 'joy@gmail.com',
      password: '1234',
      username: 'joykim',
      image: '',
      introduction: 'Hi, I am handsome guy thanks for your digits'
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {})
  }
};
