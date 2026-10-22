HEAD
# SYSTEC Atlántico SAS — sitio de demostración

Proyecto de página corporativa creado con React + Vite.

## Requisitos
- Node.js LTS compatible con la versión actual de Vite.
- Visual Studio Code recomendado.
- Conexión a Internet para descargar dependencias y cargar imágenes externas.

## Ejecutar en Windows
1. Instala Node.js desde https://nodejs.org/ y Visual Studio Code desde https://code.visualstudio.com/.
2. Descomprime la carpeta del proyecto.
3. En VS Code, abre la carpeta `systec-atlantico`.
4. Abre Terminal > Nuevo terminal.
5. Ejecuta:
   ```bash
   npm install
   npm run dev
   ```
6. Abre en el navegador la dirección local que muestre la terminal (normalmente http://localhost:5173).
7. Para comprobar que compila:
   ```bash
   npm run build
   ```

## Antes de publicar
- En `src/App.jsx`, cambia `WHATSAPP_NUMBER` por el número oficial en formato internacional, solo dígitos.
- Sustituye las imágenes ilustrativas por fotos autorizadas de la empresa.
- Confirma la dirección, correo, teléfono y enlaces de redes sociales.
- Sustituye cualquier afirmación genérica por datos comprobados.
- El formulario de esta demostración prepara un correo con `mailto`; no almacena solicitudes en un servidor. Para producción, conecta un servicio de formularios o backend.
- Revisa que los enlaces sociales dirijan a las cuentas reales.
- Las fotografías se cargan desde Unsplash y requieren Internet; descarga imágenes con licencia adecuada si necesitas que el sitio no dependa de servicios externos.

## Estructura
- `src/App.jsx`: componentes y contenido de la página.
- `src/index.css`: estilos, diseño adaptable y animaciones.
- `src/main.jsx`: punto de entrada de React.
- `index.html`: metadatos y documento principal.

# systecAtlantico
c8e2c9cb4d3e04eb705ea4f30723dad270f1eeed
