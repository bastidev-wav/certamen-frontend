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
    mensaje.innerHTML = '';
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
            <td>${obtenerBadge(solicitud.tipo)}</td>
            <td>${solicitud.descripcion}</td>
            <td style="text-align: center;">
                <button class="btn-eliminar" onclick="eliminarSolicitud(${indice})" title="Eliminar">
                    <i data-lucide="trash-2"></i>
                </button>
            </td>
        </tr>
        `;
  });

  let contadorDiv = document.getElementById('contador-contenedor');
  let totalSpan = document.getElementById('total-solicitudes');

  if (solicitudes.length > 0) {
    contadorDiv.style.display = 'flex';
    totalSpan.innerText = solicitudes.length;
  } else {
    contadorDiv.style.display = 'none';
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function eliminarSolicitud(indice) {
  solicitudes.splice(indice, 1);
  mostrarSolicitudes();
}

function obtenerBadge(tipo) {
  let icono = '';
  let clase = '';
  switch (tipo) {
    case 'Hardware':
      icono = 'cpu';
      clase = 'badge-hardware';
      break;
    case 'Software':
      icono = 'monitor';
      clase = 'badge-software';
      break;
    case 'Redes':
      icono = 'wifi';
      clase = 'badge-redes';
      break;
    case 'Seguridad':
      icono = 'shield-alert';
      clase = 'badge-seguridad';
      break;
  }
  return `<span class="badge ${clase}"><i data-lucide="${icono}"></i> ${tipo}</span>`;
}
