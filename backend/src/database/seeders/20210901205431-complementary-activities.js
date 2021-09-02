'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('complementary_activities', [
      {
        activ_id: '61e39696-434a-4e2b-89a0-4489751e7834',
        owner_id: 'f9584d5c-b11e-4148-8e12-e124782f9b9c',
        activ_name: 'Monitoria',
        activ_description: 'Monitoria de Controle',
        activ_group: 'Grupo 1',
        hour_load: '100',
        start_date: new Date(),
        end_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activ_id: 'a2c70423-b13b-4850-a7df-ee164a2cd40f',
        owner_id: 'f9584d5c-b11e-4148-8e12-e124782f9b9c',
        activ_name: 'Participação em Evento',
        activ_description: 'TechDays 2021',
        activ_group: 'Grupo 2',
        hour_load: '20',
        start_date: new Date(),
        end_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('complementary_activities', {
      activ_id: ['61e39696-434a-4e2b-89a0-4489751e7834',
      'a2c70423-b13b-4850-a7df-ee164a2cd40f',
    ]});
  }
};
