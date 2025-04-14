export const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }

  req.flash("flash", {
    type: "warning",
    title: "Acceso restringido",
    message: "Debes iniciar sesión para acceder al panel.",
  });

  res.redirect("/login");
};
