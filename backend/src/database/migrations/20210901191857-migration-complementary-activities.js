'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('complementary_activities', {
      activ_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      owner_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'users', key: 'user_id' },
      },
      activ_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      activ_description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      activ_group: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hour_load: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATE
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('complementary_activities');
  }
};
