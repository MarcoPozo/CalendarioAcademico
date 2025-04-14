import { db } from "../config/db.js";

// Buscar usuario administrador por username
export const getAdminByUsername = async (username) => {
  const [rows] = await db.execute(
    `
    SELECT *
    FROM admin_users
    WHERE username = ?
    `,
    [username]
  );

  return rows[0];
};
