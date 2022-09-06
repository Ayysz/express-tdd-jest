'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Items', {
      fields: ['userId'],
      type: 'FOREIGN KEY',
      name: 'FK_userId',
      references: {
        table: 'Users',
        field: 'id',
        as: 'userId'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};