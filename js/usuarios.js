// Referencias
const form = document.getElementById("usuarioForm");
const tablaUsuarios = document.getElementById("tablaUsuarios");
const buscarUsuario = document.getElementById("buscarUsuario");

// Datos iniciales
let usuarios = [
  { nombre: "Ana López", correo: "ana@example.com", rol: "Cliente" },
  { nombre: "Carlos Pérez", correo: "carlos@example.com", rol: "Vendedor" },
  { nombre: "Admin Master", correo: "admin@example.com", rol: "Administrador" }
];

// Renderizar tabla
function mostrarUsuarios(filtro = "") {
  tablaUsuarios.innerHTML = "";
  usuarios
    .filter(u => u.nombre.toLowerCase().includes(filtro.toLowerCase()))
    .forEach((usuario, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${usuario.nombre}</td>
        <td>${usuario.correo}</td>
        <td>${usuario.rol}</td>
        <td>
          <button class="btn-editar" onclick="editarUsuario(${index})">Editar</button>
          <button class="btn-eliminar" onclick="eliminarUsuario(${index})">Eliminar</button>
        </td>
      `;
      tablaUsuarios.appendChild(row);
    });
}

// Agregar usuario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const rol = document.getElementById("rol").value;

  usuarios.push({ nombre, correo, rol });
  mostrarUsuarios();
  form.reset();
});

// Editar usuario
function editarUsuario(index) {
  const usuario = usuarios[index];
  document.getElementById("nombre").value = usuario.nombre;
  document.getElementById("correo").value = usuario.correo;
  document.getElementById("rol").value = usuario.rol;

  usuarios.splice(index, 1);
  mostrarUsuarios();
}

// Eliminar usuario
function eliminarUsuario(index) {
  if (confirm("¿Seguro que quieres eliminar este usuario?")) {
    usuarios.splice(index, 1);
    mostrarUsuarios();
  }
}

// Buscar usuario
buscarUsuario.addEventListener("input", (e) => {
  mostrarUsuarios(e.target.value);
});

// Inicializar tabla
mostrarUsuarios();
