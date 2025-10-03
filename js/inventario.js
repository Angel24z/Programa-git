// Elementos
const form = document.getElementById("inventarioForm");
const tabla = document.getElementById("tablaInventario").querySelector("tbody");

let inventario = [];

// Función renderizar
function renderizarInventario() {
  tabla.innerHTML = "";

  inventario.forEach((item, index) => {
    const fila = document.createElement("tr");

    const estado = item.stock <= 5 
      ? `<span class="estado-bajo">Bajo</span>` 
      : `<span class="estado-ok">OK</span>`;

    fila.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.stock}</td>
      <td>${estado}</td>
      <td>
        <button class="actualizar" onclick="actualizarStock(${index})">Actualizar</button>
        <button class="eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
      </td>
    `;

    tabla.appendChild(fila);
  });
}

// Agregar producto
form.addEventListener("submit", e => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const stock = parseInt(document.getElementById("stock").value);

  inventario.push({ nombre, stock });

  form.reset();
  renderizarInventario();
});

// Actualizar stock
function actualizarStock(index) {
  const nuevoStock = prompt("Ingrese el nuevo stock para " + inventario[index].nombre, inventario[index].stock);
  if (nuevoStock !== null && !isNaN(nuevoStock)) {
    inventario[index].stock = parseInt(nuevoStock);
    renderizarInventario();
  }
}

// Eliminar producto
function eliminarProducto(index) {
  inventario.splice(index, 1);
  renderizarInventario();
}

// Inicializar
renderizarInventario();
