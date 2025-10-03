// Elementos
const formVentas = document.getElementById("ventasForm");
const tablaCarrito = document.getElementById("tablaCarrito").querySelector("tbody");
const totalFactura = document.getElementById("totalFactura");
const btnFinalizar = document.getElementById("finalizarVenta");

let carrito = [];

// Renderizar carrito
function renderizarCarrito() {
  tablaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const fila = document.createElement("tr");

    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    fila.innerHTML = `
      <td>${item.producto}</td>
      <td>$${item.precio}</td>
      <td>${item.cantidad}</td>
      <td>$${subtotal}</td>
      <td>
        <button class="eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button>
      </td>
    `;

    tablaCarrito.appendChild(fila);
  });

  totalFactura.textContent = total;
}

// Agregar producto
formVentas.addEventListener("submit", e => {
  e.preventDefault();

  const producto = document.getElementById("producto").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);

  carrito.push({ producto, precio, cantidad });

  formVentas.reset();
  renderizarCarrito();
});

// Eliminar producto
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  renderizarCarrito();
}

// Finalizar venta
btnFinalizar.addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  alert("Venta realizada con éxito. Total: $" + totalFactura.textContent);
  carrito = [];
  renderizarCarrito();
});

// Inicializar
renderizarCarrito();
