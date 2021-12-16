'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articles', [
    {
      id: 1,
      title: '나는 누구 여기는 어디...',
      content: '나는 코딩을 하고 있다, 재미있다, 정말 재미있을까?',
      image: '',
      total_like: 0,
      total_comment: 0,
      view: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      saying_id: 1
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('articles', null, {})
  }
};
