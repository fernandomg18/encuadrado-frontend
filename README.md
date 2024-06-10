# Encuadrado Frontend (Prueba Técnica)

Hola! Soy Fernando Meneses y esta es mi solucion a la prueba técnica! Espero les guste.

Este proyecto es una prueba técnica para Encuadrado. Aquí encontrarás todas las instrucciones necesarias para configurar y ejecutar el proyecto.

## Requisitos previos

- Node.js
- npm

## Configuración del proyecto

1. Clona el repositorio en tu máquina local usando `git clone https://github.com/fernandomg18/encuadrado-frontend`
2. Navega hasta el directorio del proyecto usando `cd encuadrado-frontend`
3. Instala todas las dependencias necesarias usando `npm install`

## Configuración de Variables de Entorno

Este proyecto utiliza variables de entorno para configurar ciertos aspectos de la aplicación. Estas variables deben ser definidas en un archivo `.env` en la raíz del proyecto.

Aquí hay un ejemplo de cómo debería verse tu archivo `.env`:

```properties
VITE_API_URL = https://example.com/url/de/la/api
```

Por favor, asegúrate de reemplazar https://example.com/url/de/la/api con la URL de tu propia API si es diferente.

## Ejecución del proyecto

Para ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. Ejecuta `npm run dev` para iniciar el servidor de desarrollo. Esto debería abrir el proyecto en tu navegador predeterminado.
2. Si deseas generar una versión de producción del proyecto, puedes ejecutar `npm run build`. Esto creará una carpeta `dist` en el directorio raíz del proyecto con los archivos necesarios para desplegar el proyecto en un servidor.
