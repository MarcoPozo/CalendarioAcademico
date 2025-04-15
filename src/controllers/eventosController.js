import { validationResult } from "express-validator";
import { guardarEvento, obtenerEventos } from "../models/eventosModel.js";

export const renderEventos = async (req, res) => {
  try {
    const eventos = await obtenerEventos();

    res.render("admin/eventos", {
      title: "Gestión de Eventos",
      eventos,
    });
  } catch (error) {
    console.error("Error al cargar eventos:", error);
    req.flash("flash", {
      type: "error",
      title: "Error",
      message: "No se pudo cargar la lista de eventos.",
    });
    res.render("admin/eventos", {
      title: "Gestión de Eventos",
      eventos: [],
    });
  }
};

export const crearEvento = async (req, res) => {
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
    return res.redirect("/admin/eventos");
  }

  const { fecha, titulo, color } = req.body;

  try {
    await guardarEvento(fecha, titulo, color);

    req.flash("flash", {
      type: "success",
      title: "Evento creado",
      message: "El evento fue guardado exitosamente.",
    });

    res.redirect("/admin/eventos");
  } catch (error) {
    console.error("Error al guardar evento:", error);
    req.flash("flash", {
      type: "error",
      title: "Error interno",
      message: "No se pudo guardar el evento.",
    });

    res.redirect("/admin/eventos");
  }
};
