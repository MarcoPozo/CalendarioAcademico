import { Router } from "express";
const router = Router();

//Raiz
router.get("/", (req, res) => {
  res.render("index", {
    title: "Inicio",
  });
});

export default router;
