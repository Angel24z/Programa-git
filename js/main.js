// --- main.js ---
// Solo manejar registro u otras funciones globales
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const registerMessage = document.getElementById("registerMessage");

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("regEmail").value.trim();
            const password = document.getElementById("regPassword").value.trim();
            const role = document.getElementById("role").value;

            if (name === "" || email === "" || password === "" || role === "") {
                registerMessage.textContent = "⚠️ Complete todos los campos.";
                registerMessage.style.color = "red";
            } else {
                registerMessage.textContent = "✅ Registro exitoso. Redirigiendo al login...";
                registerMessage.style.color = "green";

                setTimeout(() => {
                    window.location.href = "login.html";
                }, 2000);
            }
        });
    }
});
