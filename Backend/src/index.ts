import "dotenv/config";
import express from "express";
import { createServer } from "node:http";
import cors from "cors";

// Importar la inicializacion de Postgres
import { sequelize } from "./config/database.js";

// Importar las Rutas de RestAPI
import userRoutes from "./routes/userRoutes.js";

// Importar Modelos de la base de datos
import "./models/models.js"


const app  = express();
const httpServer = createServer(app);
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

    // Middleware
    app.use(cors()); 
    app.use(express.json());
    
    // Routes
    app.use(userRoutes);


    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
};

startServer()
