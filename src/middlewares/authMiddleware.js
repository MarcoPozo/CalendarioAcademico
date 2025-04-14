import { body } from "express-validator";

export const loginValidator = [
    body("username").trim().notEmpty().withMessage("El usuario es obligatorio"), 
    body("password").notEmpty().withMessage("La contraseña es obligatoria")
];
