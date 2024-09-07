
# Ejercicio: Creación de un Servidor HTTP Básico en Node.js

## Objetivo:
El objetivo de este ejercicio es que los estudiantes implementen un servidor básico en Node.js utilizando el módulo `http` y que puedan gestionar diferentes rutas (`/`, `/login`, `/register`) con diferentes respuestas según el tipo de solicitud (GET o POST). 

## Instrucciones:

1. **Crear la estructura de archivos:**
   - Crea una carpeta para el proyecto.
   - Dentro de la carpeta del proyecto, crea las siguientes subcarpetas y archivos:
     - Carpeta `public`: Aquí se almacenarán los archivos estáticos como imágenes o CSS.
     - Carpeta `views`: Aquí se almacenarán los archivos HTML (`home.html`, `login.html`, `register.html`).
     - Archivo `index.js`: Este será el archivo principal donde implementaremos el servidor.
     - Archivo `getContentType.js`: Implementa una función que determine el tipo de contenido de los archivos servidos (HTML, CSS, imágenes, etc.).

2. **Implementar el servidor en Node.js:**
   - En el archivo `index.js`, crea un servidor utilizando el módulo `http`.
   - Configura las siguientes rutas para solicitudes `GET`:
     - `/`: Sirve el archivo `home.html` ubicado en la carpeta `views`.
     - `/login`: Sirve el archivo `login.html` ubicado en la carpeta `views`.
     - `/register`: Sirve el archivo `register.html` ubicado en la carpeta `views`.
     - Para cualquier otra ruta que no sea de las anteriores, debes servir archivos estáticos desde la carpeta `public` (como imágenes o estilos CSS).
   - Configura las siguientes rutas para solicitudes `POST`:
     - `/login` o `/register`: Al recibir una solicitud `POST` en estas rutas, redirige al usuario a la página de inicio (`/`) con un código de estado 302.
     - Para cualquier otra ruta `POST`, devuelve un error 404.

3. **Configuración del servidor:**
   - Configura el servidor para que escuche en el puerto `3000` o en el puerto definido en la variable de entorno `PORT`.
   - Asegúrate de que al iniciar el servidor, se muestre un mensaje en consola indicando en qué puerto está corriendo.

4. **Agregar las vistas HTML:**
   - Crea archivos HTML básicos (`home.html`, `login.html`, `register.html`) en la carpeta `views`. Cada archivo debe tener contenido simple que identifique la página (por ejemplo: "Página de Inicio", "Página de Login", "Página de Registro").

5. **Testeo:**
   - Corre el servidor utilizando Node.js y accede a las rutas mencionadas desde el navegador para verificar el correcto funcionamiento.

## Puntos a evaluar:
- Correcta creación de la estructura de carpetas y archivos.
- Implementación correcta de las rutas para solicitudes `GET` y `POST`.
- Correcto manejo de redireccionamientos y respuestas 404.
- Uso adecuado de los módulos `http` y `fs` en Node.js.
- Funcionamiento del servidor en el puerto indicado y manejo de archivos estáticos.

## Entrega:
Los alumnos deben subir el proyecto completo en una carpeta comprimida o crear un repositorio en GitHub y compartir el enlace.
