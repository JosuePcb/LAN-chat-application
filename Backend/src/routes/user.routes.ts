import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";

const app = express();

// typescript typeshit

declare global {
    namespace Express {
        interface Request { 
        }
    }
}
