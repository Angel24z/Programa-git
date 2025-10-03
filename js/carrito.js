// Cargar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoBody = document.getElementById("carritoBody");
const totalCarrito = document.getElementById("totalCarrito");

// Renderizar carrito
function renderCarrito() {
  carritoBody.innerHTML = "";
  let total = 0;

  carrito.forEach((prod, index) => {
    // Convertir precio y cantidad a número por seguridad
    const precio = Number(prod.precio) || 0;
    const cantidad = Number(prod.cantidad) || 1;
    const subtotal = precio * cantidad;
    total += subtotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${prod.nombre}</td>
      <td>$${precio.toLocaleString("es-CO")}</td>
      <td>
        <input type="number" min="1" value="${cantidad}" onchange="actualizarCantidad(${index}, this.value)">
      </td>
      <td>$${subtotal.toLocaleString("es-CO")}</td>
      <td><button class="btn-danger" onclick="eliminarProducto(${index})">Eliminar</button></td>
    `;
    carritoBody.appendChild(row);
  });

  totalCarrito.textContent = `$${total.toLocaleString("es-CO")}`;
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Actualizar cantidad
function actualizarCantidad(index, nuevaCantidad) {
  carrito[index].cantidad = parseInt(nuevaCantidad) || 1;
  renderCarrito();
}

// Eliminar producto
function eliminarProducto(index) {
  carrito.splice(index, 1);
  renderCarrito();
}

// Vaciar carrito
document.getElementById("vaciarCarrito").addEventListener("click", () => {
  carrito = [];
  renderCarrito();
});

// Proceder al pago
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("⚠️ El carrito está vacío.");
  } else {
    window.locatLa definición de estándares de codificación constituye un paso esencial en la organización del proceso de desarrollo de software, ya que garantiza coherencia, claridad y escalabilidad del proyecto. El establecimiento de reglas comunes para el nombramiento de variables, clases y métodos facilita la comprensión del código, reduce la probabilidad de errores y promueve un trabajo más colaborativo entre los desarrolladores.

Asimismo, la aplicación de principios de programación orientada a objetos asegura que el sistema se construya bajo un esquema modular y reutilizable, lo que permite extender sus funcionalidades sin comprometer la estabilidad del producto. En conjunto, estos estándares representan una guía práctica para mantener la disciplina técnica y mejorar la calidad del software durante todo su ciclo de vida.ion.href = "checkout.html"; // Próximo módulo
  }
});

// Inicializar
renderCarrito();
