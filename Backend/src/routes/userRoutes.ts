import "dotenv/config";
import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { users } from "../models/models.js" //Tabla users de sequelize 

const router: any = express.Router(); // Para modular se utiliza el express.Routes(), luego esto se inicializa en el index.ts

// REGISTRO DE USUARIOS (aun no implementado en frontend)
router.post("/register", async (req: Request, res: Response): Promise<any> => {
    try {
        
        const { username, password } = req.body;

        const user = await users.findOne({ where: { username: username } });

        if (user) {
            return res.status(401).json({ message: "Usuario ya registrado" });
        }
        const hash_password = await bcrypt.hash(password, 10);
        await users.create({
            username: username,
            hash_password: hash_password,
        });

        return res.status(200).json({ message: "Usuario registrado exitosamente" });
    } catch (err) {
        console.error("Error recibiendo datos", err);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
});


// LOGIN DE USUARIOS
router.post("/login", async (req: Request, res: Response): Promise<any> => {

    try {
        const { username, password } = req.body;

        // Busca al usuario en la base de datos
        const user = await users.findOne({ where: { username: username } });

        if (!user) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }

        // Compara la contraseña ingresada con el hash almacenado
        const storedHash = user.getDataValue("hash_password") as string;
        const passwordMatch = await bcrypt.compare(password, storedHash);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        } else return res.status(200).json({ // LOGIN EXITOSO
            message: "Login Exitoso",
            user: {
                id: user.getDataValue("id_user"),
                username: user.getDataValue("username"),
            },
        });

    } catch (err) {
        console.error("Error recibiendo datos", err);
        return res.status(500).json({ message: "Error interno del servidor" });
    }

});

export default router
