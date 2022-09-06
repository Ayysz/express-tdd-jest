'use strict';
const {faker} = require('@faker-js/faker');

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
     for(let i = 0; i < 3; i++){
       const req = {
         firstName: faker.name.firstName(),
         lastName: faker.name.lastName(),
         email: faker.internet.email(),
         password: faker.internet.password(),
         createdAt: new Date(),
         updatedAt: new Date()
       };
       data.push(req);
     };

    return await queryInterface.bulkInsert('Users', data);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
