const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogComment extends Model {}

BlogComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "comment",
                key: "id",
            },
        },

        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "blog",
                key: "id"
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "blog_comment",
      }
)

module.exports = BlogComment;