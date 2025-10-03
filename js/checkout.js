// Obtener carrito de localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const resumenCarrito = document.getElementById("resumenCarrito");
const totalCheckout = document.getElementById("totalCheckout");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutMessage = document.getElementById("checkoutMessage");

// Renderizar resumen de compra
function renderResumen() {
  resumenCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((prod) => {
    const subtotal = prod.precio * prod.cantidad;
    total += subtotal;

    const item = document.createElement("li");
    item.textContent = `${prod.nombre} x${prod.cantidad} - $${subtotal.toLocaleString("es-CO")}`;
    resumenCarrito.appendChild(item);
  });

  totalCheckout.textContent = `$${total.toLocaleString("es-CO")}`;
}

renderResumen();

// Manejar envío del formulario
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (carrito.length === 0) {
    checkoutMessage.textContent = "⚠️ El carrito está vacío.";
    checkoutMessage.style.color = "red";
    return;
  }

  // ✅ Guardar compra en historial
  let historial = JSON.parse(localStorage.getItem("historial")) || [];
  const fecha = new Date().toLocaleDateString("es-CO");
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const nuevaOrden = {
    fecha,
    productos: carrito,
    total,
    estado: "Pendiente"
  };

  historial.push(nuevaOrden);
  localStorage.setItem("historial", JSON.stringify(historial));

  // Mensaje de confirmación
  checkoutMessage.textContent = "✅ Compra confirmada. ¡Gracias por tu pedido!";
  checkoutMessage.style.color = "green";

  // Vaciar carrito después de la compra
  localStorage.removeItem("carrito");
  carrito = [];

  // Redirigir al historial después de unos segundos
  setTimeout(() => {
    window.location.href = "historial.html";
  }, 2500);
});
