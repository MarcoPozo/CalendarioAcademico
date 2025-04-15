import { body } from "express-validator";

export const eventoValidator = [
  body("fecha").notEmpty().withMessage("La fecha del evento es obligatoria").isISO8601().withMessage("La fecha debe tener un formato válido (AAAA-MM-DD)"),

  body("titulo").trim().notEmpty().withMessage("El título del evento es obligatorio"),

  body("color").optional().isHexColor().withMessage("El color debe estar en formato hexadecimal (#RRGGBB)"),
];
