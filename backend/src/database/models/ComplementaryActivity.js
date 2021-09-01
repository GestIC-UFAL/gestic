'use strict';
module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define('complementary_activities', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            field: 'activ_id'
        },
        owner: {
            type: Sequelize.UUID,
            allowNull: false,
            field: 'owner_id'
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING,
            field: 'activ_name'
        },
        description: {
            allowNull: false,
            type: Sequelize.STRING,
            field: 'activ_description'
        },
        group: {
            allowNull: false,
            type: Sequelize.STRING,
            field: 'activ_group',
        },
        hours: {
            allowNull: false,
            type: Sequelize.STRING,
            field: 'hour_load',
        },
        start: {
            allowNull: false,
            type: Sequelize.DATE,
            field: 'start_date',
        },
        end: {
            allowNull: false,
            type: Sequelize.DATE,
            field: 'end_date',
        },
    }, {
        timestamps: true
    })

    // Activity.associate = (models) => {
    //     Activity.belongsTo(models.user, { 
    //         foreignKey: 'owner',
    //         as: 'ownerInfo',
    //     });
    //     Activity.belongsToMany(models.user, {
    //         foreignKey: 'activ_id',
    //         through: 'proj_members',
    //         as: 'members',
    //     })
    // }

    return Activity;
}
