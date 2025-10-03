const historialBody = document.getElementById("historialBody");
const historialMessage = document.getElementById("historialMessage");

// Recuperar historial desde localStorage
let historial = JSON.parse(localStorage.getItem("historial")) || [];

function renderHistorial() {
  historialBody.innerHTML = "";

  if (historial.length === 0) {
    historialMessage.textContent = "⚠️ No tienes compras registradas.";
    return;
  }

  historial.forEach((orden, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${orden.fecha}</td>
      <td>${orden.productos.map(p => `${p.nombre} x${p.cantidad}`).join("<br>")}</td>
      <td>$${orden.total.toLocaleString("es-CO")}</td>
      <td>${orden.estado}</td>
    `;

    historialBody.appendChild(tr);
  });
}

renderHistorial();
