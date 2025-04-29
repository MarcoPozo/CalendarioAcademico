
# 📅 Calendario Académico

Sistema web para la gestión y visualización de un calendario académico. Permite crear, editar, eliminar y mostrar eventos en un calendario visual con FullCalendar. Incluye funcionalidades para un panel de administración seguro con login y sistema de colores personalizados para los eventos.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- EJS
- MySQL (Railway)
- Tailwind CSS v4
- FullCalendar
- FontAwesome
- dotenv, express-session, bcrypt, connect-flash, cookie-parser, express-validator, method-override

---

## 📁 Estructura principal

```
📁 src
 ┣ 📁 controllers
 ┣ 📁 middlewares
 ┣ 📁 models
 ┣ 📁 public
 ┣ 📁 routes
 ┣ 📁 utils
 ┣ 📁 views
 ┃ ┣ 📁 partials
 ┃ ┗ 📄 *.ejs
 ┗ 📄 index.js
```

---

## 🎨 Estética visual

- Paleta de colores minimalista con tonos oscuros y color complementario menta.
- Fuente personalizada para títulos: `Bebas Neue`.
- Fuente para textos generales: `Ubuntu`.
- Vista responsive optimizada para pantallas pequeñas.
- FullCalendar completamente personalizado con eventos que pintan el día completo.

---

## 🔐 Autenticación

- El acceso al panel de administración (`/admin/dashboard`, `/admin/eventos`, etc.) está protegido por middleware `isAuthenticated`.
- Las contraseñas están cifradas con `bcrypt`.
- El sistema incluye sesiones y mensajes flash.

---

## 🗃️ Base de datos

- Se utiliza MySQL (Railway) con variables de entorno para proteger credenciales.
- Tablas principales: `admin_users`, `eventos`.
- El sistema soporta favoritos de colores usando `localStorage` (en creación y edición de eventos).

---

## 🌐 Deploy en Railway

- El backend está desplegado en:  
  [https://calendarioacademico-production.up.railway.app](https://calendarioacademico-production.up.railway.app)
- Se conectó correctamente a una base de datos MySQL creada en Railway y configurada mediante variables de entorno.
- Genera tu contraseña hasheada e insertala en la base de datos  con esta app web:
  [Acceder al Generador Bcrypt Online - MoonStudio](https://bcryptpassgenerator.netlify.app/)

---

## ✅ Funcionalidades destacadas

- CRUD completo de eventos.
- Vista de calendario y lista con diseño responsive.
- Sistema de colores personalizados con favoritos.
- Inserción de eventos masivos (por múltiples días).
- Eliminación múltiple y eliminación total desde el panel de eventos.
- Protección de rutas, validación de formularios y mensajes flash.

---

## 📌 Versión actual

**v4.0.0**

Incluye:
- ✨ Eventos masivos con vista dedicada.
- 🧹 Eliminación múltiple y total desde el panel de eventos.
- 🛠️ Fix de error al no existir eventos al eliminar todos (JavaScript protegido).
- 🧪 Mejoras visuales y de usabilidad.

---

## 📮 Contacto

Desarrollado por **MoonStudio**  
✉️ moonstudioopro@gmail.com
