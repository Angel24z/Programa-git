// Elementos
const form = document.getElementById("productoForm");
const tabla = document.getElementById("tablaProductos").querySelector("tbody");
const busqueda = document.getElementById("busqueda");

let productos = [];

// Función renderizar
function renderizarProductos(filtro = "") {
  tabla.innerHTML = "";

  productos
    .filter(p => p.nombre.toLowerCase().includes(filtro.toLowerCase()))
    .forEach((producto, index) => {
      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>${producto.stock}</td>
        <td>
          <button class="editar" onclick="editarProducto(${index})">Editar</button>
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
  const precio = document.getElementById("precio").value;
  const stock = document.getElementById("stock").value;

  productos.push({ nombre, precio, stock });

  form.reset();
  renderizarProductos();
});

// Buscar producto
busqueda.addEventListener("input", e => {
  renderizarProductos(e.target.value);
});

// Editar producto
function editarProducto(index) {
  const producto = productos[index];

  document.getElementById("nombre").value = producto.nombre;
  document.getElementById("precio").value = producto.precio;
  document.getElementById("stock").value = producto.stock;

  productos.splice(index, 1); // Lo quitamos de la lista hasta que se guarde de nuevo
  renderizarProductos();
}

// Eliminar producto
function eliminarProducto(index) {
  productos.splice(index, 1);
  renderizarProductos();
}

// Inicializar
renderizarProductos();
