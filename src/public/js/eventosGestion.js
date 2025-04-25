document.addEventListener("DOMContentLoaded", () => {
  const selectAllCheckbox = document.getElementById("selectAll");
  const checkboxes = document.querySelectorAll(".seleccion-evento");
  const idsInput = document.getElementById("idsSeleccionados");
  const formSeleccionados = document.getElementById("formEliminarSeleccionados");

  if (formSeleccionados && selectAllCheckbox && idsInput) {
    selectAllCheckbox.addEventListener("change", (e) => {
      checkboxes.forEach((chk) => (chk.checked = e.target.checked));
    });

    formSeleccionados.addEventListener("submit", (e) => {
      const seleccionados = Array.from(checkboxes)
        .filter((chk) => chk.checked)
        .map((chk) => chk.value);

      if (seleccionados.length === 0) {
        e.preventDefault();
        alert("Selecciona al menos un evento para eliminar.");
        return;
      }

      idsInput.value = seleccionados.join(",");
    });
  }
});

function confirmarEliminarSeleccionados() {
  return confirm("¿Seguro que deseas eliminar los eventos seleccionados?");
}

function confirmarEliminarTodos() {
  return confirm("¿Seguro que deseas eliminar TODOS los eventos?");
}
