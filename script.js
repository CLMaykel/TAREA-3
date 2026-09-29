// Capturamos el formulario cuando el usuario hace clic en "Guardar Cliente"
document.getElementById("miFormulario").addEventListener("submit", function(evento) {
    
    // Evitamos que la página se recargue automáticamente
    evento.preventDefault();

    // Obtenemos los valores escritos en cada campo
    let cedula = document.getElementById("cedula").value;
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

    // Validación básica 1: Que ningún campo esté vacío
    if (cedula === "" || nombre === "" || direccion === "" || telefono === "" || correo === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validación básica 2: Cédula de 10 dígitos exactos
    if (cedula.length !== 10) {
        alert("La cédula debe tener exactamente 10 dígitos.");
        return;
    }

    // Validación básica 3: Teléfono de 10 dígitos exactos
    if (telefono.length !== 10) {
        alert("El teléfono celular debe tener exactamente 10 dígitos.");
        return;
    }

    // Si todo está correcto
    alert("¡Datos ingresados correctamente!");
});