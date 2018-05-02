import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
    }
  }, {

    hooks: {
      afterValidate: (user, options) => {
        user.password = bcrypt.hashSync(user.password, 10);
      }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};