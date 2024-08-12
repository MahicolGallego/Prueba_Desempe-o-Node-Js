# e comfast prueba desempeño NodeJs Riwi

## Descripción

Este proyecto es una aplicación desarrollada en Node.js usando Express y Sequelize con TypeScript. Incluye autenticación con JWT, manejo de contraseñas con bcrypt, y gestión de dependencias con tsyringe.

## Requisitos

- Node.js (versión 16.x o superior)
- npm (versión 7.x o superior)

## Instalación

1. **Clona el repositorio**:

```bash
    git clone https://github.com/MahicolGallego/Prueba_Desempe-o-Node-Js
```

## Navega al directorio del proyecto:

```bash
    cd Prueba_Desempe-o-Node-Js
```

## Instala las dependencias:

```bash
    npm install
```

2. **Configura las variables de entorno**:

- Crea un archivo .env en la raíz del proyecto y define las siguientes variables de entorno:

```dotenv
DB_HOST=""
DB_USER=""
DB_PASSWORD=""
DB_NAME=""
PORT=""
JWT_SECRET=""
BCRYPT_PASS=""
```

## Uso

1. **Modo de Desarrollo**

- Para ejecutar la aplicación en modo de desarrollo, usa el siguiente comando:

```bash
    npm start
```

- Este comando inicia el servidor con nodemon, que reinicia automáticamente el servidor cada vez que detecta cambios en los archivos.

2. **Modo de Producción**

- Si quieres ejecutar la aplicación en modo de producción, compila primero el proyecto y luego inicia el servidor:
- Compila el proyecto:

```bash
    npx tsc
```

- Inicia la aplicación:

```bash
    node dist/index.js
```

## Estructura del Proyecto

e_comfast_prueba_riwi/
├── src/
│ ├── config/
| ├── controllers/
| ├── data-access/
| ├── helpers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── services/
│ └── index.ts
├── dist/ (Generado tras la compilación)
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── data.sql
├── eslint.config.mjs
├── nodemon.json
├── package-lock.json
├── package.json
├── nodeJS-Typescript.pdf
├── README.md
└── tsconfig.json

- src/: Contiene el código fuente de la aplicación.
- dist/: Contiene el código compilado en JavaScript (modo producción).
- package.json: Archivo de configuración de npm con las dependencias y scripts del proyecto.
- .env: Archivo de configuración para variables de entorno.
- tsconfig.json: Configuración del compilador TypeScript.
- .prettierrc - .prettierignore - eslint.config.mjs: Configuracion de prettier y eslint.
- nodemon.json - Configuracion de nodemon en el para el modo desarrollo
- data.sql: consultas para generar la base de datos

**Dependencias**

- Express: Framework web para Node.js.
- Sequelize: ORM para manejar bases de datos relacionales.
- TypeScript: Superset de JavaScript que añade tipado estático.
- bcrypt: Librería para encriptar contraseñas.
- jsonwebtoken: Implementación de JWT para autenticación.
- dotenv: Carga variables de entorno desde un archivo .env.

  **DevDependencies**

- nodemon: Herramienta para reiniciar el servidor automáticamente durante el desarrollo.
- ts-node: Ejecuta archivos TypeScript sin compilarlos manualmente.
- @types: Tipos de TypeScript para varias librerías.

## Comandos para mysql

```bash
    Encuentras los comandos en el data.sql en la raiz del proyecto
```
