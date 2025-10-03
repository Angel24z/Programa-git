// Lista de productos simulados
const productos = [
  { id: 1, nombre: "Camiseta básica", descripcion: "Camiseta 100% algodón, varios colores.", precio: 25000, categoria: "ropa", imagen: "https://via.placeholder.com/220x180?text=Camiseta" },
  { id: 2, nombre: "Jeans azul", descripcion: "Pantalón denim clásico, corte slim.", precio: 80000, categoria: "ropa", imagen: "https://via.placeholder.com/220x180?text=Jeans" },
  { id: 3, nombre: "Zapatillas deportivas", descripcion: "Comodidad y estilo para tu día.", precio: 120000, categoria: "calzado", imagen: "https://via.placeholder.com/220x180?text=Zapatillas" },
  { id: 4, nombre: "Chaqueta impermeable", descripcion: "Ideal para lluvia, ligera y resistente.", precio: 150000, categoria: "ropa", imagen: "https://via.placeholder.com/220x180?text=Chaqueta" },
  { id: 5, nombre: "Bolso de cuero", descripcion: "Bolso elegante para toda ocasión.", precio: 95000, categoria: "accesorios", imagen: "https://via.placeholder.com/220x180?text=Bolso" }
];

const productosList = document.getElementById("productosList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount"); // ← contador en el header

// Renderizar productos
function mostrarProductos(lista) {
  productosList.innerHTML = "";

  if (lista.length === 0) {
    productosList.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }

  lista.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.descripcion}</p>
      <p class="price">$${prod.precio.toLocaleString("es-CO")}</p>
      <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;

    productosList.appendChild(card);
  });
}

// Filtrar productos
function filtrarProductos() {
  const texto = searchInput.value.toLowerCase();
  const categoria = categoryFilter.value;

  const filtrados = productos.filter(prod => {
    const matchTexto = prod.nombre.toLowerCase().includes(texto);
    const matchCategoria = categoria === "all" || prod.categoria === categoria;
    return matchTexto && matchCategoria;
  });

  mostrarProductos(filtrados);
}

// Eventos
if (searchInput && categoryFilter) {
  searchInput.addEventListener("input", filtrarProductos);
  categoryFilter.addEventListener("change", filtrarProductos);
}

// Inicial
mostrarProductos(productos);

// Manejo de carrito en localStorage
function agregarAlCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const producto = productos.find(p => p.id === id);

  const existe = carrito.find(p => p.id === id);
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadorCarrito(); // ← actualizar después de agregar
  alert(`✅ ${producto.nombre} agregado al carrito`);
}

// Actualizar contador de carrito
function actualizarContadorCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let totalItems = carrito.reduce((acc, item) => acc + Number(item.cantidad), 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}

// Inicializar contador al cargar la tienda
actualizarContadorCarrito();

