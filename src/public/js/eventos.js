document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("colorPicker");
  const favoritos = document.querySelectorAll('input[name="colorFavorito"]');
  const colorFinal = document.getElementById("colorFinal");

  function actualizarColorFinal() {
    const favoritoSeleccionado = Array.from(favoritos).find((f) => f.checked);
    colorFinal.value = favoritoSeleccionado ? favoritoSeleccionado.value : colorPicker.value;
  }

  actualizarColorFinal();

  colorPicker.addEventListener("input", () => {
    favoritos.forEach((f) => (f.checked = false));
    actualizarColorFinal();
  });

  favoritos.forEach((f) => {
    f.addEventListener("change", actualizarColorFinal);
  });
});
