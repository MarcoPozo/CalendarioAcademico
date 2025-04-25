import { validationResult } from "express-validator";
import { guardarEvento, obtenerEventos, getEventoById, editarEvento, eliminarEvento } from "../models/eventosModel.js";

// Render Eventos
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

// Crear Eventos
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
      message: "El evento fue guardado exitosamente",
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

// Actualizar Evento
export const actualizarEvento = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash("flash", {
      type: "error",
      title: "Error de validación",
      message: errors
        .array()
        .map((e) => e.msg)
        .join(" | "),
    });
    return res.redirect("/admin/eventos");
  }

  const { id } = req.params;
  const { fecha, titulo, color } = req.body;

  try {
    await editarEvento(id, fecha, titulo, color);
    req.flash("flash", {
      type: "success",
      title: "Evento actualizado",
      message: "Se ha modificado correctamente",
    });
    res.redirect("/admin/eventos");
  } catch (error) {
    console.error("Error al editar evento:", error);
    req.flash("flash", {
      type: "error",
      title: "Error interno",
      message: "No se pudo editar el evento.",
    });
    res.redirect("/admin/eventos");
  }
};

// Render Editar
export const renderEditarEvento = async (req, res) => {
  const { id } = req.params;

  try {
    const evento = await getEventoById(id);
    if (!evento) {
      req.flash("flash", {
        type: "error",
        title: "Evento no encontrado",
        message: "No existe un evento con ese ID.",
      });
      return res.redirect("/admin/eventos");
    }
    res.render("admin/editar", {
      title: "Editar Evento",
      evento,
    });
  } catch (error) {
    console.error("Error al cargar el evento:", error);
    req.flash("flash", {
      type: "error",
      title: "Error interno",
      message: "No se pudo cargar el evento.",
    });
    res.redirect("/admin/eventos");
  }
};

// Eliminar Evento
export const eliminarEventoController = async (req, res) => {
  const { id } = req.params;

  try {
    await eliminarEvento(id);
    req.flash("flash", {
      type: "success",
      title: "Evento eliminado",
      message: "Se ha eliminado correctamente.",
    });
    res.redirect("/admin/eventos");
  } catch (error) {
    console.error("Error al eliminar evento:", error);
    req.flash("flash", {
      type: "error",
      title: "Error interno",
      message: "No se pudo eliminar el evento.",
    });
    res.redirect("/admin/eventos");
  }
};
