import { db } from "../config/db.js";

// Guardar nuevo evento
export const guardarEvento = async (fecha, titulo, color) => {
  await db.execute(
    `
    INSERT INTO eventos (fecha, titulo, color)
    VALUES (?, ?, ?)`,
    [fecha, titulo, color]
  );
};

// Obtener todos los eventos ordenados por fecha
export const obtenerEventos = async () => {
  const [rows] = await db.execute(`
    SELECT id, fecha, titulo, color, created_at
    FROM eventos
    ORDER BY fecha ASC
  `);

  return rows.map((evento) => ({
    ...evento,
    created_at: new Date(evento.created_at),
  }));
};
