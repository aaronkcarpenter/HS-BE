"use strict";

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "UserTables",
      [
        {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          hashedPassword: bcrypt.hashSync('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          hashedPassword: bcrypt.hashSync('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("UserTables", null, {});
  },
};
