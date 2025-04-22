import "dotenv/config";
import express from "express";

if (!process.env.SESSION_SECRET) {
  throw new Error("❌ SESSION_SECRET no está definido. Revisa las variables en Railway.");
}

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/router.js";
import flash from "connect-flash";
import { sessionMiddleware } from "./middlewares/ssessionMiddleware.js";
import { setFlashMessage } from "./middlewares/flashMiddleware.js";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

//Middlewares
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(sessionMiddleware);
app.use(flash());
app.use(setFlashMessage);

// Routes
app.use(indexRouter);

// Manage Error
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Pagina no encontrada",
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
