// login.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            e.stopImmediatePropagation(); // 🚀 Evita que main.js también ejecute el submit

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const role = document.getElementById("role").value;

            if (!email || !password || !role) {
                loginMessage.textContent = "⚠️ Complete todos los campos.";
                loginMessage.style.color = "red";
                return;
            }

            if (email === "admin@multistore.com" && password === "admin123" && role === "admin") {
                loginMessage.textContent = "✅ Bienvenido Administrador";
                loginMessage.style.color = "green";
                setTimeout(() => {
                    window.location.href = "dashboard.html"; 
                }, 1000);
            } else if (email === "cliente@multistore.com" && password === "cliente123" && role === "cliente") {
                loginMessage.textContent = "✅ Bienvenido Cliente";
                loginMessage.style.color = "green";
                setTimeout(() => {
                    window.location.href = "tienda.html"; 
                }, 1000);
            } else {
                loginMessage.textContent = "❌ Credenciales incorrectas o rol no válido.";
                loginMessage.style.color = "red";
            }
        });
    }
});

