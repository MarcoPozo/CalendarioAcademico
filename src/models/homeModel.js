import { db } from "../config/db.js";

export const obtenerEventosCalendario = async () => {
  const [rows] = await db.execute(`
        SELECT id, fecha AS start, titulo AS title, color
        FROM eventos
      `);
  return rows;
};
