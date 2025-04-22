# 🦷 Clínica Dental - Frontend

Este es el frontend de la aplicación de gestión de citas para una clínica dental. Permite a los usuarios registrarse, iniciar sesión, crear citas y a los administradores gestionar su estado. Está construido con **React**, **React Router** y se comunica con una API RESTful.

---

## ⚙️ Tecnologías utilizadas

- React
- React Router DOM
- Axios
- Leaflet (para el mapa)
- CSS personalizado
- Vite
- LocalStorage (para manejar autenticación)
- dotenv (Manejo de variables de entorno)

---

## 📦 Instalación

1. Clona el repositorio
2. npm install
3. npm run dev para iniciar el servidor

---

## 📚 Estructura del proyecto

src/
│
├── components/
│   ├── Appointments.jsx  # Gestión de citas
│   ├── Login.jsx         # Inicio de sesión
│   ├── Register.jsx      # Registro de usuarios
│   ├── Navbar.jsx        # Barra de navegación
│
├── js/
│   ├── map.js            # Lógica del mapa con Leaflet
│   └── script.jsx        # Modal React dinámico
│
├── App.jsx               # Rutas principales
├── main.jsx              # Entrada principal
├── App.css               # Estilos generales
└── index.css             # Estilos globales

---

## 🔐 Autenticación

 - Se usa LocalStorage para almacenar el token JWT (token), el rol (role) y el ID del usuario (userId).
 - Si el token no existe, se redirige automáticamente al login.
 - Rutas protegidas como /appointments.

---

## 📅 Citas

 - Los usuarios pueden crear nuevas citas ingresando fecha y motivo.
 - Los administradores pueden:
       - Ver citas de todos los usuarios.
       - Cambiar el estado de una cita (pendiente, confirmada, cancelada).
       - Actualizar la fecha de la cita.

---

## 🗺️ Mapa
 - Se usa Leaflet para mostrar la ubicación de la clínica.
 - Incluye un marcador con enlace directo a Google Maps.

---

## 🧾 Notas adicionales

Puedes iniciar sesión con estos usuarios ya creados:
 - Admin: 
      correo: admin3@email.com / contraseña: admin123456
 - Usuario:
      correo: feralo@email.com / contraseña: 123456