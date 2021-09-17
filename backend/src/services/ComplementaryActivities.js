const UserService = require('./User');
const Service = require('./Service');
const db = require('../database/models');
const uuid = require('uuid');

class ComplementaryAcivities extends Service {
    constructor() {
        super("complementary_activities");
    }

    async insert({ token, ownerId, name, description,
        group, hours, start, end}) {
        try {
            await super.insert({ token });
            const complementaryActivity = await this.db.create({
                id: uuid.v4(),
                owner: ownerId,
                name,
                description,
                group,
                hours,
                start,
                end
            });
            return complementaryActivity;
        } catch (err) {
            throw err;
        }
    }

    async deleteActivity({token, id}) {
        try {
            await this.userService.verifyUserProfile({
                token, validProfileTags: this.allwdProf.edit });

            const complementaryActivities = await this.db.findByPk(id);
            if (!complementaryActivities) throw new Error('User not found.');
            await complementaryActivities.destroy()
            return complementaryActivities;
        } catch (err) {
            throw err;
        }
    }

    async deleteAll(token) {
        try {
            await this.userService.verifyUserProfile({
                token, validProfileTags: this.allwdProf.deleteAll });

            const complementaryActivities = await this.db.findAll();
            for (let i = 0; i < complementaryActivities.length; ++i) {
                await complementaryActivities[i].destroy()
            }
            return complementaryActivities;
        } catch (err) {
            throw err;
        }
    }
}


module.exports = ComplementaryAcivities;
