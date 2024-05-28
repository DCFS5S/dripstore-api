/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Variant', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
    await queryInterface.addConstraint('Variant', {
      type: 'unique',
      fields: ['type', 'value'],
      name: 'variant_type_value_unique',
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Variant');
  },
};
