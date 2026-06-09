import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";

import { users } from "../models/models.js"

const router: any = express.Router();


router.post("/login", async (req: Request, res: Response): Promise<any> => {

    try {
        const { username, password } = req.body;

        const user = await users.findOne({ where: { username: username } }); //BUSCA AL USUARIO EN LA BASE DE DATOS Y LO ASIGNA A LA VARIABLE USER

        if (!user) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" }); //SI NO CONSIGUE AL USUARIO DEVUELVE EL CODIGO 401
        }

        if (user.getDataValue("hash_password") !== password) {
            return res.status(401).json({ message: "Usuario o contraseña" }); // SI NO CONSIGUE AL USUARIO DEVUELVE EL CODIGO 401
        }

        return res.status(200).json({ // LOGIN EXITOSO
            message: "Login Exitoso",
            user: {
                id: user.getDataValue("id_user"),
                username: user.getDataValue("username"),
            },
        });

    } catch (err) {
        console.error("Error recibiendo datos", err);
        return res.status(500).json({ message: "Error interno del servidor" }); // 
    }
    

});

export default router