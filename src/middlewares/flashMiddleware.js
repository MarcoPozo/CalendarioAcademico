export const setFlashMessage = (req, res, next) => {
  res.locals.flash = req.flash("flash")[0] || null;
  next();
};
