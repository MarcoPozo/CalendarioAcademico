import { Router } from "express";
import { renderHome } from "../controllers/homeController.js";
import { renderLogin, handleLogin } from "../controllers/authController.js";
import { loginValidator } from "../middlewares/authMiddleware.js";
import { renderDashboard } from "../controllers/adminController.js";
import { isAuthenticated } from "../middlewares/authenticatedMiddleware.js";

const router = Router();

//Raiz
router.get("/", renderHome);

// Login
router.get("/login", renderLogin);
router.post("/login", loginValidator, handleLogin);

// Admin
router.get("/admin/dashboard", isAuthenticated, renderDashboard);

export default router;
