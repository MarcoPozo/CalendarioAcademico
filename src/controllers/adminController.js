// Render admin dashboard
export const renderDashboard = (req, res) => {
  res.render("admin/dashboard", {
    title: "Panel del Administrador",
    username: req.session.user.username,
  });
};
