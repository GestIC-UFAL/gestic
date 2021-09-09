'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ClassTimetables', [{
      timetable_id: '5280ba38-3d87-48e3-b6d8-6c6151139a53',
      offer_id: '16d4ecd9-4441-4998-9788-d81f7e613df7',
      weekday: 'mon',
      start_time: '07:00',
      end_time: '08:00',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      timetable_id: '6b475edd-4b23-4e59-b2fc-3a3db2ff66a2',
      offer_id: '16d4ecd9-4441-4998-9788-d81f7e613df7',
      weekday: 'wed',
      start_time: '07:00',
      end_time: '08:00',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      timetable_id: '51fd5f8d-28b3-434e-9aa2-872ae0cedc7b',
      offer_id: '0527207b-6070-4743-af4c-2b0b052da159',
      weekday: 'mon',
      start_time: '07:00',
      end_time: '08:00',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ClassTimetables', null, {})
  }
};
