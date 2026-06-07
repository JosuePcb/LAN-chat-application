import { Sequelize } from "sequelize";
import "dotenv/config";

if (!process.env.DB_URL) {
    throw new Error("DATABASE_ERROR: DB_URL environment variable is missing.");
}

const sequelize = new Sequelize(process.env.DB_URL);

export { sequelize };