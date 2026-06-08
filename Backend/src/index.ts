import "dotenv/config";
import express from "express";
import cors from "cors";

// Importar la inicializacion de Postgres
import { sequelize } from "./config/database.js";

// Importar las Rutas de RestAPI
import "./routes/user.routes.js"

// Importar Modelos de la base de datos
import "./models/models.js"

import userRoutes from "./routes/user.routes.js";



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
    app.use(express.json());
    app.use(userRoutes);


    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
};

startServer()
