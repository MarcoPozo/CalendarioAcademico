import { obtenerEventosCalendario } from "../models/homeModel.js";

export const renderHome = async (req, res) => {
  try {
    const eventos = await obtenerEventosCalendario();
    res.render("index", {
      title: "Inicio",
      eventos,
    });
  } catch (error) {
    console.error("Error al cargar eventos:", error);
    res.render("index", {
      title: "Calendario Académico",
      eventos: [],
    });
  }
};
