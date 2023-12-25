'use strict';

/** @type {import('sequelize-cli').Migration} */
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

    await queryInterface.bulkInsert('Airports',[
      {
          name : 'kempegowda International airport',
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
         
      },
      {
        name : 'devi ahilya bai holkar International airport',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : 'mysuru International airport',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : 'Indira Gandhi International airport',
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
