let solicitudes = [];

function registrarSolicitud() {
  let nombre = document.getElementById('nombre').value.trim();
  let correo = document.getElementById('correo').value.trim();
  let area = document.getElementById('area').value.trim();
  let tipo = document.getElementById('tipo').value;
  let descripcion = document.getElementById('descripcion').value.trim();
  let mensaje = document.getElementById('mensaje');

  if (nombre === '' || correo === '' || area === '' || tipo === '' || descripcion === '') {
    mensaje.innerHTML = 'Todos los campos son obligatorios.';
    mensaje.style.color = 'red';
    return;
  }

  let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    mensaje.innerHTML = 'Ingrese un correo válido.';
    mensaje.style.color = 'red';
    return;
  }

  let solicitud = {
    nombre: nombre,
    correo: correo,
    area: area,
    tipo: tipo,
    descripcion: descripcion,
  };

  solicitudes.push(solicitud);
  mensaje.innerHTML = 'Solicitud registrada correctamente.';
  mensaje.style.color = 'green';
  setTimeout(function () {
    mensaje.innerHTML = "";
  }, 3000);
  mostrarSolicitudes();
  limpiarFormulario();
}

function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('area').value = '';
  document.getElementById('tipo').value = '';
  document.getElementById('descripcion').value = '';
}

function mostrarSolicitudes() {
  let tabla = document.getElementById('tablaSolicitudes');
  tabla.innerHTML = '';
  solicitudes.forEach(function (solicitud, indice) {
    tabla.innerHTML += `
        <tr>
            <td>${indice + 1}</td>
            <td>${solicitud.nombre}</td>
            <td>${solicitud.area}</td>
            <td>${solicitud.tipo}</td>
            <td>${solicitud.descripcion}</td>
        </tr>
        `;
  });
}