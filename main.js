let solicitudes = [],

function registrarSolicitud() {
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let area = document.getElementById("area").value.trim();
    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value.trim();
    let mensaje = document.getElementById("mensaje");

    if (
        nombre === "" ||
        correo === "" ||
        area === "" ||
        tipo == "" ||
        descripcion === ""
    ) {
        mensaje.innerHTML = "Todos los campos son obligatorio.";
        mensaje.style.color = "red";
        return
    }

    if (!correo.includes("@")) {
        mensaje.innerHTML = "El correo debe contener el simbolo @.";
        mensaje.style.color = "red";
        return
    }

    let solicitud = {
        nombre: nombre,
        correo: correo,
        area: area,
        tipo: tipo,
        descripcion: descripcion
    };

    solicitudes.push(solicitud);
    mensaje.innerHTML = "Solicitud registrada correctamente.";
    mensaje.style.color = "green";
    mostrarSolicitudes();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("area").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("descripcion").value = "";
}