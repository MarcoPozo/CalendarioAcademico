import session from "express-session";

if (!process.env.SESSION_SECRET) {
  throw new Error("❌ SESSION_SECRET no está definido en el archivo .env");
}

export const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
});
