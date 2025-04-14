import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import { getAdminByUsername } from "../models/authModel.js";

// Render Login
export const renderLogin = (req, res) => {
  res.render("login", {
    title: "Iniciar Sesión",
  });
};

// Procesar login
export const handleLogin = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const mensaje = errors
      .array()
      .map((err) => err.msg)
      .join(" | ");
    req.flash("flash", {
      type: "error",
      title: "Campos inválidos",
      message: mensaje,
    });
    return res.redirect("/login");
  }

  const { username, password } = req.body;

  try {
    const admin = await getAdminByUsername(username);

    if (!admin) {
      req.flash("flash", {
        type: "error",
        title: "Usuario no encontrado",
        message: "El nombre de usuario ingresado no existe.",
      });
      return res.redirect("/login");
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      req.flash("flash", {
        type: "error",
        title: "Contraseña incorrecta",
        message: "La contraseña ingresada no es válida.",
      });
      return res.redirect("/login");
    }

    // Login correcto
    req.session.user = {
      id: admin.id,
      username: admin.username,
    };

    req.flash("flash", {
      type: "success",
      title: "Bienvenido",
      message: `Hola ${admin.username}, has iniciado sesión correctamente.`,
    });

    res.redirect("/admin/dashboard");
  } catch (error) {
    console.error("Error en login:", error);
    req.flash("flash", {
      type: "error",
      title: "Error interno",
      message: "Ocurrió un error inesperado. Intenta más tarde.",
    });
    res.redirect("/login");
  }
};

// Cerrar sesión
export const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
