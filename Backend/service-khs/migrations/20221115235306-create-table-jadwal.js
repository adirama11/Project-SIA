'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('jadwal', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
      },
      id_mapel : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      id_guru : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      id_ruang : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      id_kelas : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      hari_waktu : {
        type : Sequelize.STRING,
        allowNull : true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('jadwal');
  }
};
