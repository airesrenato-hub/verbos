# 📋 Instrucciones para Usar el Juego HABLAR C1

## 🚀 Cómo Ejecutar el Juego

### Opción 1: Usar GitHub Pages (Recomendado) ⭐

El juego está configurado para funcionar en GitHub Pages. Después de que se despliegue automáticamente:

1. **Espera unos minutos** después del push a GitHub
2. **Abre tu navegador** y ve a:
   ```
   https://airesrenato-hub.github.io/verbos/
   ```
3. **Haz clic en "El Verbo HABLAR"** para empezar a jugar

### Opción 2: Servidor Local (Para desarrollo)

Si quieres probar el juego localmente:

#### Usando Python 3:
```bash
# Navega a la carpeta del proyecto
cd /ruta/a/verbos

# Inicia el servidor
python3 -m http.server 8080

# Abre tu navegador en:
# http://localhost:8080
```

#### Usando el script incluido:
```bash
# Navega a la carpeta del proyecto
cd /ruta/a/verbos

# Ejecuta el script (abrirá el navegador automáticamente)
python3 start_server.py
```

#### Usando Node.js (si tienes npm):
```bash
# Instala http-server globalmente
npm install -g http-server

# Navega a la carpeta y ejecuta
cd /ruta/a/verbos
http-server -p 8080

# Abre: http://localhost:8080
```

### Opción 3: Abrir Directamente (Limitado) ⚠️

Puedes abrir el archivo `index.html` directamente en tu navegador haciendo doble clic, **PERO**:

- ❌ **JavaScript podría no funcionar** en algunos navegadores por políticas de seguridad
- ❌ **Las fuentes de Google Fonts no se cargarán** (solo tipografía por defecto)
- ✅ **El contenido HTML y CSS básico sí funcionará**

**Recomendación:** Usa siempre un servidor local o GitHub Pages para la mejor experiencia.

---

## 🎮 Cómo Jugar

1. **Página Principal**: Verás todos los juegos disponibles
2. **Selecciona "El Verbo HABLAR"**: Haz clic en la tarjeta del juego
3. **Lee la Teoría**: Opcional pero recomendado para entender los conceptos
4. **Haz clic en "Empezar el Juego"**: Comienza el cuestionario
5. **Responde las preguntas**: Selecciona la opción correcta
6. **Recibe feedback**: Verás si tu respuesta es correcta o incorrecta
7. **Lee las explicaciones**: Después de cada respuesta, aparece una explicación
8. **Haz clic en "Siguiente"**: Para pasar a la siguiente pregunta
9. **Revisa tus resultados**: Al final verás tu puntuación y errores
10. **Repasa o vuelve a jugar**: Puedes repasar tus errores o empezar de nuevo

---

## 🐛 Solución de Problemas

### El juego no carga
- **Solución**: Usa un servidor local o GitHub Pages. No abras el archivo directamente.

### Los estilos no se aplican
- **Solución**: Asegúrate de que el archivo `styles.css` esté en la misma carpeta que `index.html`

### JavaScript no funciona
- **Solución**: 
  1. Usa un servidor local
  2. Verifica que el archivo `game.js` esté en la misma carpeta
  3. Abre la consola del navegador (F12) para ver errores

### Las fuentes no se cargan
- **Solución**: Esto es normal al abrir localmente. Usa un servidor local o GitHub Pages.

### Los enlaces no funcionan
- **Solución**: Asegúrate de estar usando la versión más reciente del repositorio.

---

## 📁 Estructura de Archivos

```
verbos/
├── index.html                    # Página principal con todos los juegos
├── README.md                     # Documentación principal
├── INSTRUCCIONES.md              # Este archivo
├── start_server.py               # Script para iniciar servidor local
├── test.html                     # Página de prueba
└── hablar_c1/                    # Juego: El Verbo HABLAR
    ├── index.html                # Interfaz del juego
    ├── styles.css                # Estilos CSS
    ├── game.js                   # Lógica del juego
    ├── questions.json            # Base de datos de preguntas
    └── README.md                 # Documentación del juego
```

---

## 🔧 Configuración de GitHub Pages

El repositorio ya está configurado para GitHub Pages:

1. **Workflow**: `.github/workflows/deploy.yml` - Despliega automáticamente al hacer push a main
2. **Configuración**: `.github/pages.config.yml` - Configuración de Pages

Si GitHub Pages no se activa automáticamente:

1. Ve a **Settings > Pages** en tu repositorio de GitHub
2. Selecciona **Branch: main** y **Folder: / (root)**
3. Haz clic en **Save**
4. Espera unos minutos a que se despliegue

---

## 📞 Soporte

Si tienes problemas:

1. **Verifica la consola del navegador** (F12 > Console) para ver errores
2. **Asegúrate de usar un servidor local** o GitHub Pages
3. **Revisa que todos los archivos estén en su lugar**
4. **Actualiza el repositorio** con `git pull`

---

## ✅ Verificación Rápida

Para verificar que todo funciona:

1. **Abre la consola del navegador** (F12)
2. **Ve a la pestaña "Console"**
3. **Deberías ver**: Sin errores de JavaScript
4. **Prueba el botón**: Haz clic en "Empezar el Juego" y verifica que funcione

Si ves errores en la consola, por favor repórtalos.

---

**¡Disfruta aprendiendo español con VerbOS!** 🎉
