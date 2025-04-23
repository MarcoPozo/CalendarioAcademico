import fs from "fs";
import path from "path";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export async function importarBaseDeDatos() {
  const archivoSQL = path.join(process.cwd(), "src", "utils", "calendario_academico.sql"); // Ruta ajusta según donde lo pongas

  const contenidoSQL = fs.readFileSync(archivoSQL, "utf-8");

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
  });

  await connection.query(contenidoSQL);
  await connection.end();

  return "✅ Base de datos importada correctamente";
}
