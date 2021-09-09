require("dotenv/config");
const UserService = require("./User");
const Service = require("./Service");
const db = require("../database/models");
const uuid = require("uuid");

class ClassTimetable extends Service {
  constructor() {
    super("ClassTimetable");
  }

  async insert({ token, weekday, end_time, start_time, offerId }) {
    try {
      await super.insert({ token });
      const insertedClassTimetable = await db.ClassTimetable.create({
        id: uuid.v4(),
        weekday,
        end_time,
        start_time,
        offerId,
      });
      return insertedClassTimetable;
    } catch (err) {
      throw err;
    }
  }

  async update({ token, id, weekday, end_time, start_time }) {
    try {
      let timetable = await super.update({ token, id });
      await db.ClassTimetable.update(
        {
          weekday: weekday || timetable.weekday,
          start_time: start_time || timetable.start_time,
          end_time: end_time || timetable.end_time,
        },
        {
          where: { id },
        }
      );
      timetable = await db.ClassTimetable.findByPk(id);
      return timetable;
    } catch (err) {
      throw err;
    }
  }

  async deleteAll(token) {
    try {
      await this.userService.verifyUserProfile({
        token,
        validProfileTags: this.allwdProf.deleteAll,
      });

      const timetables = await db.ClassTimetable.findAll();
      for (let i = 0; i < timetables.length; ++i) {
        await timetables[i].destroy();
      }
      return timetables;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ClassTimetable;
