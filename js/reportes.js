const ctx = document.getElementById("graficoReporte").getContext("2d");
let chart;

// Datos de ejemplo
const dataEjemplo = {
  ventas: {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    data: [500, 700, 800, 600, 900]
  },
  inventario: {
    labels: ["Camisetas", "Pantalones", "Zapatos", "Accesorios"],
    data: [120, 80, 60, 40]
  },
  usuarios: {
    labels: ["Clientes", "Vendedores", "Administradores"],
    data: [150, 20, 5]
  }
};

// Renderizar gráfico
function renderChart(tipo) {
  if (chart) chart.destroy();

  let dataset = dataEjemplo[tipo];

  chart = new Chart(ctx, {
    type: tipo === "ventas" ? "line" : "bar",
    data: {
      labels: dataset.labels,
      datasets: [{
        label: `Reporte de ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`,
        data: dataset.data,
        backgroundColor: ["#0078d7", "#28a745", "#ffc107", "#dc3545"],
        borderColor: "#005ea0",
        borderWidth: 2,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        tooltip: { enabled: true }
      }
    }
  });
}

// Evento filtro
document.getElementById("filtroForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const tipo = document.getElementById("tipoReporte").value;
  renderChart(tipo);
});

// Render inicial
renderChart("ventas");
