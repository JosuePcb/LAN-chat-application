import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT;

app.use(cors())

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
