import "dotenv/config";
import express from "express";
import cors from "cors";
import { sequelize } from "./config/database.js";
import "./models/models.js"


const app = express();
const PORT = process.env.PORT;


const startServer = async () => {

    // Database connection

    try {

        await sequelize.authenticate(); // CONEXION A BASE DE DATOS
        
        await sequelize.sync(); // SINCRONIZACION DE MODELOS

        console.log("Connection to database successfully.");

    } catch (err) {
        console.error("Unable to connect to the database:", err);
    }


    // Api Rest



    app.use(cors());

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
};

startServer()
