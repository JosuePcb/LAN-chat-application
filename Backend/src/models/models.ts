import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const users = sequelize.define(
    "Users",
    {
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },

        hash_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        ip: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    { timestamps: false },
);

const messages = sequelize.define("Messages", {
    id_message: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    message: {
        type: DataTypes.STRING,
    },

    file_type: {
        type: DataTypes.CHAR,
        allowNull: true,
    },
});

users.hasMany(messages, {
    foreignKey: "id_user",
    sourceKey: "id_user",
});

messages.belongsTo(users, {
    foreignKey: "id_user",
    targetKey: "id_user",
});

export { users, messages };
