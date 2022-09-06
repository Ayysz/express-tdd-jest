'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     const data = [];

     for (let i = 0; i < 4; i++){
         const req = {
             title: faker.commerce.productName(),
             link: faker.internet.url(),
             userId: faker.helpers.arrayElement([1,2,3]),
             createdAt: new Date(),
             updatedAt: new Date()
         };
         data.push(req);
     }

   return await queryInterface.bulkInsert('Items', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Items', null, {});
  }
};
