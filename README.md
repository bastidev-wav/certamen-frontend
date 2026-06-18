# TeslaSys Chile - Sistema de Registro de Solicitudes de Soporte

Aplicación web desarrollada para la **Evaluación Sumativa 2** de la asignatura **Desarrollo Frontend** de **INACAP**.

El sistema permite registrar solicitudes de soporte técnico realizadas por colaboradores de **TeslaSys Chile**, almacenando temporalmente la información mediante arreglos y objetos JavaScript, y mostrando los registros dinámicamente utilizando manipulación del DOM.

---

## 🌐 Demo

**Sitio web:**
https://bastidev-wav.github.io/certamen-frontend/

---

## 📸 Vista Previa

![Captura del proyecto](https://github.com/bastidev-wav/bastidev-wav/blob/main/Captura%20de%20pantalla%202026-06-18%20020341.png?raw=true)

---

## ✨ Características

- Registro de solicitudes de soporte técnico.
- Validación de campos obligatorios.
- Validación de correo electrónico.
- Almacenamiento temporal mediante arreglos y objetos JavaScript.
- Actualización dinámica de registros sin recargar la página.
- Limpieza automática del formulario.
- Diseño moderno y responsivo.
- Uso de iconos mediante Lucide Icons.
- Implementación de tipografías locales en formato WOFF2.
- Interfaz inspirada en la identidad visual corporativa de Tesla.

---

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Lucide Icons
- Fuentes locales WOFF2

---

## 📂 Estructura del Proyecto

```text
certamen-frontend/
│
├── index.html
├── styles.css
├── scrollbar.css
├── main.js
├── README.md
├── IA_UTILIZADA.txt
├── enlace_github.txt
│
├── img/
│   ├── logo.png
│   └── favicon.png
│
└── font/
    ├── Universal-Sans-Display-Medium.woff2
    ├── Universal-Sans-Display-Regular.woff2
    ├── Universal-Sans-Text-Medium.woff2
    └── Universal-Sans-Text-Regular.woff2
```

---

## 📋 Funcionalidades Implementadas

### Registro de Solicitudes

El formulario permite ingresar:

- Nombre del colaborador
- Correo electrónico
- Área de trabajo
- Tipo de solicitud
  - Hardware
  - Software
  - Redes
  - Seguridad

- Descripción del problema

### Validaciones

El sistema verifica que:

- Ningún campo quede vacío.
- El correo electrónico tenga un formato válido.
- Los mensajes de éxito y error se muestren dinámicamente utilizando JavaScript y manipulación del DOM.

### Uso de Objetos y Arreglos

Las solicitudes son almacenadas en un arreglo de objetos:

```javascript
let solicitudes = [];
```

Ejemplo:

```javascript
{
  nombre: "Juan Pérez",
  correo: "juan@correo.cl",
  area: "Finanzas",
  tipo: "Hardware",
  descripcion: "No enciende el equipo"
}
```

### Manipulación del DOM

Cada vez que se registra una nueva solicitud:

- Se crea un objeto con los datos ingresados.
- Se almacena en el arreglo mediante `push()`.
- La tabla se actualiza automáticamente utilizando `forEach()`.
- No es necesario recargar la página.

---

## 🎓 Contenidos Aplicados

Durante el desarrollo se aplicaron los siguientes contenidos de la asignatura:

- Variables
- Condicionales (`if`)
- Funciones
- Eventos
- Objetos
- Arreglos
- Método `push()`
- Método `forEach()`
- Manipulación del DOM
- Formularios HTML
- Validación de datos
- Diseño responsivo

---

## 🤖 Uso de Inteligencia Artificial

Para el desarrollo del proyecto se utilizó asistencia mediante herramientas de Inteligencia Artificial con fines de:

### ChatGPT - Logo y Favicon

- Creación del logotipo del proyecto.
- Diseño del favicon personalizado.
- Definición de identidad visual.

### GitHub Copilot - Datos de Prueba

- Generación de solicitudes de ejemplo.
- Validación del formulario.
- Pruebas de visualización de registros.

### ChatGPT - README.md

- Documentación del proyecto.
- Organización de la información técnica.
- Creación del README para GitHub.

La evidencia correspondiente se encuentra documentada en el archivo:

```text
IA_UTILIZADA.txt
---

## 👨‍💻 Autor

**Sergio Campos**

Estudiante de Ingeniería en Informática
INACAP

GitHub: https://github.com/bastidev-wav

---

## 📄 Licencia

Proyecto desarrollado con fines académicos para la asignatura **Desarrollo Frontend** de INACAP.
```
