'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brand', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
    await queryInterface.createTable('category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      parent_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: { model: 'Product', key: 'id' },
      },
      name: {
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0,
      },
      description: {
        type: Sequelize.STRING(1000),
      },
      brand_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {model: 'Brand', key: 'id'},
      },
      stock: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
    await queryInterface.createTable('product_category', {
      product_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: 'Product', key: 'id' },
        primaryKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: 'Category', key: 'id' },
        primaryKey: true,
      },
    });
    await queryInterface.createTable('variant',{
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      slug: {
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
    });
    await queryInterface.createTable('product_variant', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: 'Product', key: 'id' },
      },
      variant_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: 'Variant', key: 'id' },
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_category');
    await queryInterface.dropTable('product_variant');
    await queryInterface.dropTable('variant');
    await queryInterface.dropTable('product');
    await queryInterface.dropTable('brand');
    await queryInterface.dropTable('category');
  },
};
