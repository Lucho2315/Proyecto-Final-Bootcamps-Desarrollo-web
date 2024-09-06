function validarFormulario() {
    // Limpiar mensajes de error
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorPassword").textContent = "";
    document.getElementById("errorConfirmPassword").textContent = "";

    // Obtener valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validación
    var esValido = true;

    if (nombre.trim() === "") {
        document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
        esValido = false;
    }

    if (email.trim() === "") {
        document.getElementById("errorEmail").textContent = "El correo electrónico es obligatorio.";
        esValido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("errorEmail").textContent = "El formato del correo electrónico no es válido.";
        esValido = false;
    }

    if (password.trim() === "") {
        document.getElementById("errorPassword").textContent = "La contraseña es obligatoria.";
        esValido = false;
    } else if (password.length < 6) {
        document.getElementById("errorPassword").textContent = "La contraseña debe tener al menos 6 caracteres.";
        esValido = false;
    }

    if (confirmPassword.trim() === "") {
        document.getElementById("errorConfirmPassword").textContent = "Por favor, confirma tu contraseña.";
        esValido = false;
    } else if (password !== confirmPassword) {
        document.getElementById("errorConfirmPassword").textContent = "Las contraseñas no coinciden.";
        esValido = false;
    }

    // Si es válido, se puede enviar el formulario
    return esValido;
}