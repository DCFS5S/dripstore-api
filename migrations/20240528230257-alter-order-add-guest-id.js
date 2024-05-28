/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Orders',
      'guestId',
      Sequelize.TEXT,
    );
  },

  async down(queryInterface) {
    return queryInterface.removeColumn(
      'Orders',
      'guestId',
    );
  },
};
