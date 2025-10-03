// Gestión de proveedores
document.addEventListener("DOMContentLoaded", () => {
  const proveedorForm = document.getElementById("proveedorForm");
  const proveedorTable = document.getElementById("proveedorTable");

  proveedorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const empresa = document.getElementById("empresa").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${nombre}</td>
      <td>${empresa}</td>
      <td>${telefono}</td>
      <td>${correo}</td>
      <td>
        <button class="edit-btn">✏️ Editar</button>
        <button class="delete-btn">🗑️ Eliminar</button>
      </td>
    `;

    proveedorTable.appendChild(row);
    proveedorForm.reset();

    // Evento eliminar
    row.querySelector(".delete-btn").addEventListener("click", () => {
      row.remove();
    });

    // Evento editar
    row.querySelector(".edit-btn").addEventListener("click", () => {
      document.getElementById("nombre").value = nombre;
      document.getElementById("empresa").value = empresa;
      document.getElementById("telefono").value = telefono;
      document.getElementById("correo").value = correo;
      row.remove();
    });
  });
});
s