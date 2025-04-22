import { Router } from "express";
import { renderHome } from "../controllers/homeController.js";
import { renderLogin, handleLogin, logout } from "../controllers/authController.js";
import { loginValidator } from "../middlewares/authMiddleware.js";
import { renderDashboard } from "../controllers/adminController.js";
import { isAuthenticated } from "../middlewares/authenticatedMiddleware.js";
import { renderEventos, crearEvento, renderEditarEvento, actualizarEvento, eliminarEventoController } from "../controllers/eventosController.js";
import { eventoValidator } from "../middlewares/eventosMiddleware.js";

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

export default router;
