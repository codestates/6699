'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sayings', [
    {
      id: 1,
      content: '땀은 지방의 눈물이다',
      category: '건강',
      total_like: 1,
      createdAt: new Date()
    },
    {
      id: 2,
      content: '배움에는 왕도가 없다',
      category: '학습',
      total_like: 1,
      createdAt: new Date()
    },
    {
      id: 3,
      content: '세상에 공짜는 없다',
      category: '경제',
      total_like: 1,
      createdAt: new Date()
    },
    {
      id: 4,
      content: '가는 자는 쫓지 말며, 오는 자는 막지 말라',
      category: '인간관계',
      total_like: 1,
      createdAt: new Date()
    },
    {
      id: 5,
      content: '사랑이 있는 곳에는 고통이 함께 한다',
      category: '사랑',
      total_like: 1,
      createdAt: new Date()
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sayings', null, {})
  }
};
