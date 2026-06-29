# 🎮 VerbOS - Juegos Didácticos de Verbos en Español

![VerbOS Logo](https://img.icons8.com/color/96/000000/spanish.png)

**VerbOS** es una plataforma de **juegos didácticos interactivos** diseñados para ayudar a estudiantes de **Español como Lengua Extranjera (ELE)** a dominar los verbos españoles y sus expresiones a través de una experiencia de aprendizaje gamificada.

## 🌟 Características Principales

- ✅ **Juegos interactivos** con feedback inmediato
- ✅ **Niveles del MCER** (A1, A2, B1, B2, C1, C2)
- ✅ **Explicaciones gramaticales** detalladas
- ✅ **Sistema de puntuación** y seguimiento de progreso
- ✅ **Modo de repaso** de errores
- ✅ **Diseño responsive** (móvil, tablet, desktop)
- ✅ **100% gratuito** y de código abierto

## 📁 Estructura del Proyecto

```
verbos/
├── index.html                    # Página principal con todos los juegos
├── README.md                     # Este archivo
├── hablar_c1/                    # Juego: El Verbo HABLAR (Nivel C1)
│   ├── index.html                # Página del juego
│   ├── styles.css                # Estilos CSS
│   ├── game.js                   # Lógica del juego
│   ├── questions.json            # Base de datos de preguntas
│   └── README.md                 # Documentación específica
└── [futuros juegos]/             # Más juegos de verbos
```

## 🎮 Juegos Disponibles

### 🗣️ El Verbo HABLAR - Nivel C1

**Descripción:** Juego completo para dominar el verbo "hablar" y todas sus expresiones.

**Contenido:**
- Preposiciones con HABLAR (de, con, por)
- Expresiones idiomáticas (hablar claro, hablar por hablar, hablar en serio, hablar a gritos)
- Verbo pronominal "hablarse"
- Errores comunes
- 20 preguntas de opción múltiple

**Enlace:** [Jugar Ahora](hablar_c1/index.html)

**Carpeta:** `/hablar_c1/`

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en el navegador

1. Descarga o clona este repositorio
2. Navega a la carpeta del juego que quieres jugar
3. Abre el archivo `index.html` en tu navegador

```bash
# Ejemplo para el juego HABLAR C1
cd verbos/hablar_c1
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

### Opción 2: Servidor local

Para una mejor experiencia, puedes ejecutar un servidor local:

```bash
# Usando Python 3
python3 -m http.server 8000

# Usando Node.js (con http-server)
npx http-server

# Usando PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

### Opción 3: GitHub Pages

Puedes desplegar este repositorio en GitHub Pages para acceder a los juegos desde cualquier lugar.

## 📚 Metodología Pedagógica

Cada juego sigue una estructura pedagógica probada:

1. **Teoría** - Explicación clara de los conceptos
2. **Práctica** - Preguntas interactivas con feedback inmediato
3. **Refuerzo** - Explicaciones detalladas después de cada respuesta
4. **Evaluación** - Sistema de puntuación y análisis de rendimiento
5. **Repaso** - Opción para repasar los errores cometidos

## 🎯 Niveles del MCER

Los juegos están organizados según el **Marco Común Europeo de Referencia para las Lenguas (MCER)**:

- **A1** - Principiante
- **A2** - Básico
- **B1** - Intermedio
- **B2** - Intermedio Alto
- **C1** - Avanzado
- **C2** - Dominio

## 🔧 Personalización

Puedes personalizar fácilmente los juegos:

### Añadir un nuevo juego

1. Crea una nueva carpeta con el nombre del verbo (ej: `comer_a1/`)
2. Copia la estructura de `hablar_c1/` como plantilla
3. Modifica las preguntas en `game.js` o `questions.json`
4. Actualiza `index.html` para incluir el nuevo juego

### Modificar preguntas existentes

Edita el archivo `questions.json` o el array `questions` en `game.js`:

```json
{
  "question": "Texto de la pregunta",
  "options": ["opción1", "opción2", "opción3", "opción4"],
  "correct_answer": "Respuesta correcta",
  "correct_index": 0,
  "explanation": "Explicación detallada"
}
```

## 📊 Tecnologías Usadas

- **HTML5** - Estructura de las páginas
- **CSS3** - Estilos y diseño responsive
- **JavaScript (ES6+)** - Lógica de los juegos
- **JSON** - Base de datos de preguntas
- **Google Fonts** - Tipografías

## 🎨 Diseño

- **Colores:** Paleta profesional y agradable
- **Tipografía:** Poppins (Google Fonts)
- **Responsive:** Adapta a cualquier tamaño de pantalla
- **Animaciones:** Transiciones suaves para mejor UX
- **Accesibilidad:** Colores con buen contraste

## 📝 Contribuciones

¡Las contribuciones son bienvenidas! Puedes:

1. **Reportar errores** - Abre un issue en GitHub
2. **Sugerir mejoras** - Propón nuevas características
3. **Añadir juegos** - Crea juegos para otros verbos
4. **Traducir** - Ayuda a traducir a otros idiomas

## 📄 Licencia

Este proyecto es de **código abierto** y puede ser utilizado libremente para fines educativos.

## 🙏 Agradecimientos

- A todos los profesores de ELE que inspiraron este proyecto
- A los estudiantes que prueban y dan feedback
- A la comunidad de desarrolladores de juegos educativos

## 📞 Contacto

Para preguntas o sugerencias, por favor abre un **issue** en el repositorio de GitHub.

---

**¡Empieza a aprender español de forma divertida con VerbOS!** 🎉

[![GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=github)](https://github.com/airesrenato-hub/verbos)
