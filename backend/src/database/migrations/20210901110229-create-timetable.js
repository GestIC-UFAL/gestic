"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ClassTimetables", {
      timetable_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      offer_id: {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.UUID,
        references: { model: "offers", key: "offer_id" },
        onUpdate: "CASCADE",
      },
      weekday: {
        type: Sequelize.ENUM("sun", "mon", "tue", "wed", "thu", "fri", "sat"),
      },
      start_time: {
        type: Sequelize.STRING,
      },
      end_time: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ClassTimetables");
  },
};
