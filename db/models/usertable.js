'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('UserTable', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isEmail: true,
        len: [3, 255],
      }
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validates: {
        len: [60, 60],
      },
    }, 
  }, {});
  UserTable.associate = function(models) {
    // associations can be defined here
  };
  return UserTable;
};