"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("offers", "offers_pkey")
    await queryInterface.addConstraint('offers', {
      fields: ['offer_id'],
      type: 'primary key',
      name: 'offers_pkey'
    })
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("offers", "offers_pkey")
    await queryInterface.addConstraint('offers', {
      fields: ['offer_id', 'owner_id'],
      type: 'primary key',
      name: 'offers_pkey'
    })
  },
};
