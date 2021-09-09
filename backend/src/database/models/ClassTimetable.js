"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClassTimetable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ClassTimetable.belongsTo(models.offer);
    }
  }
  ClassTimetable.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'timetable_id'
      },
      offerId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        field: 'offer_id'
      },
      weekday: DataTypes.ENUM("sun", "mon", "tue", "wed", "thu", "fri", "sat"),
      start_time: DataTypes.STRING,
      end_time: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ClassTimetable",
    }
  );

  return ClassTimetable;
};
