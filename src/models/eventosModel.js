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
    SELECT id, fecha, titulo, color, created_at, updated_at
    FROM eventos
    ORDER BY fecha ASC
  `);

  return rows.map((evento) => ({
    ...evento,
    created_at: new Date(evento.created_at),
  }));
};

// Obtener Evento ID
export const getEventoById = async (id) => {
  const [rows] = await db.execute(`SELECT * FROM eventos WHERE id = ?`, [id]);
  return rows[0];
};

// Editar Evento
export const editarEvento = async (id, fecha, titulo, color) => {
  await db.execute(
    `
      UPDATE eventos
      SET fecha = ?, titulo = ?, color = ?, updated_at = NOW()
      WHERE id = ?
    `,
    [fecha, titulo, color, id]
  );
};

// Eliminar Evento
export const eliminarEvento = async (id) => {
  await db.execute(`DELETE FROM eventos WHERE id = ?`, [id]);
};
