import { db } from "../config/db.js";

export async function insertarEventosMasivos(fechas, titulo, color) {
  const values = fechas.map((fecha) => [fecha, titulo, color]);
  const query = "INSERT INTO eventos (fecha, titulo, color) VALUES ?";

  await db.query(query, [values]);
}
