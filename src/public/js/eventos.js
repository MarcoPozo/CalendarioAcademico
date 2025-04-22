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

const FAVORITOS_KEY = "coloresFavoritosLocal";

function guardarColorFavorito(color) {
  let favoritos = JSON.parse(localStorage.getItem(FAVORITOS_KEY)) || [];
  if (!favoritos.includes(color)) {
    favoritos.push(color);
    localStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
  }
}

function eliminarColorFavorito(color) {
  Swal.fire({
    title: "¿Eliminar color?",
    text: `¿Estás seguro de eliminar el color ${color}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#EF4444",
  }).then((result) => {
    if (result.isConfirmed) {
      const contenedor = document.getElementById("coloresFavoritos");
      const wrapper = [...contenedor.children].find((child) => child.querySelector("input")?.value === color);
      if (wrapper) {
        wrapper.classList.add("animate-fadeOut");
        setTimeout(() => {
          let favoritos = JSON.parse(localStorage.getItem(FAVORITOS_KEY)) || [];
          favoritos = favoritos.filter((c) => c !== color);
          localStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
          renderizarFavoritos();
        }, 300);
      }
    }
  });
}

function renderizarFavoritos() {
  const contenedor = document.getElementById("coloresFavoritos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const favoritos = JSON.parse(localStorage.getItem(FAVORITOS_KEY)) || [];
  favoritos.forEach((color) => {
    const wrapper = document.createElement("div");
    wrapper.className = "relative group";

    const label = document.createElement("label");
    label.className = "cursor-pointer";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "colorFavorito";
    input.value = color;
    input.className = "peer hidden";
    input.addEventListener("change", () => {
      document.getElementById("colorFinal").value = color;
      document.getElementById("colorPicker").value = color;
    });

    const span = document.createElement("span");
    span.style.backgroundColor = color;
    span.className = "inline-block w-6 h-6 rounded-full border peer-checked:ring-2 peer-checked:ring-[var(--color-acento-cosmico)]";

    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.innerHTML = "<i class='fa-solid fa-x text-[8px]'></i>";
    botonEliminar.title = "Eliminar color";
    botonEliminar.className = "absolute -top-2 -right-2 text-white bg-[var(--color-fondo-principal)] w-4 h-4 rounded-full hidden group-hover:flex items-center justify-center cursor-pointer";
    botonEliminar.onclick = (e) => {
      e.preventDefault();
      eliminarColorFavorito(color);
    };

    label.appendChild(input);
    label.appendChild(span);
    wrapper.appendChild(label);
    wrapper.appendChild(botonEliminar);
    contenedor.appendChild(wrapper);
  });
}

function agregarColorFavorito() {
  const color = document.getElementById("colorPicker").value;
  if (!color || color === "#000000") {
    Swal.fire({
      icon: "warning",
      title: "Color inválido",
      text: "Selecciona un color distinto antes de añadir.",
      confirmButtonColor: "#F59E0B",
    });
    return;
  }
  guardarColorFavorito(color);
  renderizarFavoritos();
}

document.getElementById("colorPicker").addEventListener("input", (e) => {
  document.getElementById("colorFinal").value = e.target.value;
});

document.addEventListener("DOMContentLoaded", () => {
  renderizarFavoritos();
});
