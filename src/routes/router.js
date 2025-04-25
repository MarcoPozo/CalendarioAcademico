import { Router } from "express";
import { renderHome } from "../controllers/homeController.js";
import { renderLogin, handleLogin, logout } from "../controllers/authController.js";
import { loginValidator } from "../middlewares/authMiddleware.js";
import { renderDashboard } from "../controllers/adminController.js";
import { isAuthenticated } from "../middlewares/authenticatedMiddleware.js";
import { renderEventos, crearEvento, renderEditarEvento, actualizarEvento, eliminarEventoController } from "../controllers/eventosController.js";
import { eventoValidator } from "../middlewares/eventosMiddleware.js";
import { renderEventosMasivos, crearEventosMasivos } from "../controllers/eventosMasivosController.js";
// import { importarBaseDeDatos } from "../utils/importDb.js";

const router = Router();

//Raiz
router.get("/", renderHome);

// Login
router.get("/login", renderLogin);
router.post("/login", loginValidator, handleLogin);
router.get("/logout", logout);

// Admin
router.get("/admin/dashboard", isAuthenticated, renderDashboard);

// Eventos
router.get("/admin/eventos", isAuthenticated, renderEventos);
router.post("/admin/eventos", isAuthenticated, eventoValidator, crearEvento);
router.get("/admin/eventos/:id/edit", isAuthenticated, renderEditarEvento);
router.post("/admin/eventos/:id/edit", isAuthenticated, eventoValidator, actualizarEvento);
router.post("/admin/eventos/:id/delete", isAuthenticated, eliminarEventoController);

// Eventos Masivos
router.get("/admin/eventos/masivos", isAuthenticated, renderEventosMasivos);
router.post("/admin/eventos/masivos", isAuthenticated, crearEventosMasivos);

// Util DB
/* 
router.get("/admin/importar-db", isAuthenticated, async (req, res) => {
  try {
    const resultado = await importarBaseDeDatos();
    res.send(resultado);
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error al importar la base de datos");
  }
});  
*/

export default router;
