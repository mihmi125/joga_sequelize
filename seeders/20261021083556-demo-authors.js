'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Authors', [
      { id: 1, name: 'Ashley Galvin', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Patrick Beach', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'MacKenzie Miller', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};