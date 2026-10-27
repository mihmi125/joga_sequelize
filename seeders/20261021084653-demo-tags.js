'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tags', [
      { id: 1, name: 'yogapractice', createdAt: '2022-02-16 13:32:01', updatedAt: '2022-02-16 13:32:01' },
      { id: 2, name: 'yogainspiration', createdAt: '2022-02-16 13:32:01', updatedAt: '2022-02-16 13:32:01' },
      { id: 3, name: 'wellness', createdAt: '2022-02-16 13:32:01', updatedAt: '2022-02-16 13:32:01' },
      { id: 4, name: 'nature', createdAt: '2022-02-16 13:32:01', updatedAt: '2022-02-16 13:32:01' },
      { id: 5, name: 'spiritual', createdAt: '2022-02-16 13:32:01', updatedAt: '2022-02-16 13:32:01' },
      { id: 6, name: 'sport', createdAt: '2022-02-16 13:32:01', updatedAt: '2022-02-16 13:32:01' },
      { id: 7, name: 'yogateacher', createdAt: '2022-02-16 13:32:01', updatedAt: '2022-02-16 13:32:01' }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};