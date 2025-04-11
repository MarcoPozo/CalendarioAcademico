import "dotenv/config";
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/router.js";

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
