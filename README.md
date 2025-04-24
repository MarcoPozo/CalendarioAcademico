
# 📅 Calendario Académico

Sistema web de calendario académico desarrollado con Node.js, Express y MySQL. Permite gestionar eventos académicos con una interfaz moderna, responsiva y visualmente atractiva. Implementa autenticación, CRUD de eventos y visualización en calendario mediante FullCalendar.

---

## 🚀 Tecnologías

- **Backend**: Node.js, Express
- **Frontend**: EJS, Tailwind CSS, FullCalendar
- **Base de Datos**: MySQL
- **Autenticación**: express-session + bcrypt
- **Deploy**: Railway
- **Gestión de dependencias**: dotenv, method-override, express-validator, connect-flash

---

## 📦 Instalación local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/calendario-academico.git
   cd calendario-academico
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` con las variables necesarias:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=
   DB_NAME=db_name
   PORT=3000
   SESSION_SECRET=session_secret
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```

---

## 🌐 Deploy en Railway

- El backend está desplegado en:  
  [`https://calendarioacademico-production.up.railway.app`](https://calendarioacademico-production.up.railway.app)

- Se conectó correctamente a una base de datos MySQL creada en Railway y configurada mediante variables de entorno.

- Se integró un script `/admin/importar-db` que importa el archivo `calendario_academico.sql` y recrea las tablas necesarias.

---

## 🛠 Funcionalidades

- Login para administradores
- Vista de Dashboard
- CRUD de eventos:
  - Crear eventos con fecha, título y color personalizado
  - Editar y eliminar eventos
- Almacenamiento de colores favoritos con `localStorage`
- Visualización con FullCalendar
- Vista responsive y estética académica
- Importación de base de datos desde SQL en entorno Railway

---

## 📁 Estructura de carpetas

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

## 📑 Scripts

```json
"scripts": {
  "start": "node ./src/index.js",
  "dev": "nodemon ./src/index.js"
}
```

---

## 🧠 Consideraciones

- En Railway, los campos `DATE` pueden guardar la fecha con desfase si no se ajusta la zona horaria. Ya se solucionó configurando `new Date(fecha + "T00:00:00")` en el código.
- El archivo `.env` debe configurarse manualmente en Railway.
- El archivo `calendario_academico.sql` se importa desde la ruta protegida `/admin/importar-db`.

---

## 📮 Contacto

Desarrollado por **MoonStudio**  
✉️ moonstudioopro@gmail.com

---
