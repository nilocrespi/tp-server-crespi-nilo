# CinemaDB

API REST para gestionar películas con autenticación de usuarios.

## Requisitos previos

- Node.js (v18 o superior)
- npm (incluido con Node.js)
- MongoDB (local o en la nube - MongoDB Atlas)

## Instalación

### 1. Clonar o descargar el proyecto

```bash
cd cinemadb/backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la carpeta `backend` basándote en el archivo `.env.example`:

```bash
cp .env.example .env
```

Completa el archivo `.env` con tus valores:

```env
PORT=3000
URI_DB=mongodb://localhost:27017/cinemadb
JWT_SECRET=tu_clave_secreta_super_segura
JWT_EXPIRES=7d
```

**Valores recomendados:**
- `PORT`: Puerto en el que correrá el servidor (ej: 3000, 5000)
- `URI_DB`: Cadena de conexión a MongoDB
  - Local: `mongodb://localhost:27017/cinemadb`
  - MongoDB Atlas: `mongodb+srv://usuario:contraseña@cluster.mongodb.net/cinemadb`
- `JWT_SECRET`: Una cadena de caracteres segura y única para firmar tokens JWT
- `JWT_EXPIRES`: Tiempo de expiración del token (ej: 7d, 24h)

## Ejecutar el proyecto

### Modo desarrollo (con hot reload)

```bash
npm run dev
```

El servidor se iniciará y estará disponible en `http://localhost:3000`

## Endpoints disponibles

### Autenticación

- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión

### Películas (requieren token JWT)

- `GET /api/movies` - Obtener todas las películas
- `POST /api/movies` - Agregar nueva película
- `PUT /api/movies/:id` - Actualizar película
- `DELETE /api/movies/:id` - Eliminar película

## Estructura del proyecto

```
backend/
├── src/
│   ├── index.js                 # Archivo principal
│   ├── config/
│   │   └── mongodb.js          # Configuración de MongoDB
│   ├── controllers/
│   │   ├── auth.controller.js   # Lógica de autenticación
│   │   └── movie.controller.js  # Lógica de películas
│   ├── middleware/
│   │   └── authMiddleware.js    # Validación de tokens JWT
│   ├── models/
│   │   ├── user.model.js        # Esquema de usuarios
│   │   └── movie.model.js       # Esquema de películas
│   └── routes/
│       ├── authRouter.js        # Rutas de autenticación
│       └── moviesRouter.js      # Rutas de películas
├── .env                         # Variables de entorno (no compartir)
├── .env.example                 # Plantilla de variables
├── package.json                 # Dependencias del proyecto
└── .gitignore                   # Archivos ignorados por Git
```

## Dependencias principales

- **express** - Framework web
- **mongoose** - ODM para MongoDB
- **jsonwebtoken** - Manejo de autenticación JWT
- **bcryptjs** - Hash seguro de contraseñas
- **cors** - Control de acceso entre dominios
- **dotenv** - Gestión de variables de entorno

## Solución de problemas

### Error de conexión a MongoDB

- Verifica que MongoDB esté corriendo en tu máquina
- Comprueba la URI_DB en el archivo `.env`
- Si usas MongoDB Atlas, asegúrate de agregar tu IP en la whitelist

### Puerto ya en uso

- Cambia el valor de `PORT` en el archivo `.env`
- O termina el proceso que está usando el puerto

### Token JWT inválido

- Asegúrate de tener un token válido en el header `Authorization: Bearer <token>`
- Verifica que el token no haya expirado

## Desarrollo

Para agregar logs más detallados o cambiar la configuración, edita los archivos en la carpeta `src/`.

## Documentación de API

Puedes usar la colección de Bruno incluida en la carpeta `cinemdadb-collection/` para probar los endpoints.

---

**Última actualización:** Febrero 2026
