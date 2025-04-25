import { insertarEventosMasivos } from "../models/eventosMasivosModel.js";

export function renderEventosMasivos(req, res) {
  res.render("admin/eventosMasivos", {
    title: "Crear Eventos Masivos",
  });
}

export async function crearEventosMasivos(req, res) {
  const { dias, mes, anio, titulo, color } = req.body;

  try {
    const diasArray = dias.split(",").map((d) => d.trim());

    const fechas = diasArray.map((dia) => {
      const mesConCero = mes.padStart(2, "0");
      const diaConCero = dia.padStart(2, "0");
      return `${anio}-${mesConCero}-${diaConCero}`;
    });

    await insertarEventosMasivos(fechas, titulo, color);
    req.flash("flash", {
      type: "success",
      title: "Eventos creados",
      message: "Los eventos fueron guardados exitosamente",
    });
    res.redirect("/admin/eventos");
  } catch (error) {
    console.error("❌ Error al crear eventos masivos:", error);
    req.flash("flash", {
      type: "error",
      title: "Error interno",
      message: "No se pudo guardar los eventos",
    });

    res.redirect("/admin/eventos");
  }
}
