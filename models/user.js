"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // 1. User 모델에서
      this.hasOne(models.UserInfos, {
        // 2. UserInfos 모델에게 1:1 관계 설정
        sourceKey: "userId", // 3. User 모델의 userId 컬럼을
        foreignKey: "UserId", // 4. UserInfos 모델의 UserId 컬럼과 연결
      });
    }
  }

  User.init(
    {
      userId: {
        allowNull: false, // NOT NULL
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true, // Primary Key (기본키)
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false, // NOT NULL
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false, // NOT NULL
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
