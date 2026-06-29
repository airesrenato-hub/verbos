# 🗣️ Juego C1: El Verbo HABLAR y sus Expresiones

## Descripción

Juego interactivo didáctico diseñado para estudiantes de **nivel C1** de español que desean dominar el verbo **"hablar"** y todas las expresiones idiomáticas y construcciones gramaticales que se forman a partir de él.

## 🎯 Objetivos de Aprendizaje

- Dominar el uso de **"hablar" con preposiciones** (de, con, por)
- Aprender **expresiones idiomáticas** con "hablar"
- Practicar el **verbo pronominal "hablarse"**
- Distinguir entre usos correctos e incorrectos
- Mejorar la **comprensión auditiva y escrita** en contexto

## 📚 Contenido Teórico

### 1. HABLAR + Preposiciones
- **Hablar DE** algo/alguien: Referirse a un tema o persona
  - *Ejemplo: Hoy hablamos de política en clase.*
- **Hablar CON** alguien: Comunicarse con una persona
  - *Ejemplo: Ayer hablé con mi jefe sobre el proyecto.*
- **Hablar POR** teléfono: Usar el teléfono para comunicarse
  - *Ejemplo: Prefiero hablar por videollamada.*

### 2. Expresiones Idiomáticas
- **Hablar claro**: Ser directo y sincero
  - *Ejemplo: No le des vueltas, ¡habla claro!*
- **Hablar por hablar**: Hablar sin decir nada importante
  - *Ejemplo: No me gusta la gente que habla por hablar.*
- **Hablar en serio**: Decir algo con seriedad
  - *Ejemplo: ¿Hablas en serio o es una broma?*
- **Hablar a gritos**: Hablar muy fuerte
  - *Ejemplo: No es necesario hablar a gritos, te oigo perfectamente.*

### 3. Verbos Relacionados
- **Hablarse** (pronominal): Tener una conversación
  - *Ejemplo: Nos hablamos por teléfono ayer.*
- **Hablar + idioma**: Dominar un idioma
  - *Ejemplo: Hablo español, inglés y francés.*

## 🎮 Cómo Jugar

1. **Modo Teoría**: Lee la explicación completa sobre las expresiones con "hablar"
2. **Modo Juego**: Responde 20 preguntas de opción múltiple
3. **Feedback Inmediato**: Recibe retroalimentación después de cada respuesta
4. **Explicaciones**: Cada pregunta incluye una explicación detallada
5. **Repaso de Errores**: Al final, puedes repasar todas las preguntas que fallaste

## 📊 Características

- ✅ 20 preguntas cuidadosamente diseñadas para nivel C1
- ✅ Sistema de puntuación y progreso
- ✅ Feedback visual (colores para respuestas correctas/incorrectas)
- ✅ Explicaciones gramaticales detalladas
- ✅ Modo de repaso de errores
- ✅ Diseño responsive (funciona en móvil, tablet y desktop)
- ✅ Navegación con teclado (Enter para seleccionar)
- ✅ Animaciones suaves para mejor experiencia

## 🚀 Cómo Ejecutar

Simplemente abre el archivo `index.html` en cualquier navegador web moderno:

```bash
# Navega a la carpeta del juego
cd hablar_c1

# Abre el archivo en tu navegador
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

O simplemente haz doble clic en el archivo `index.html`.

## 📁 Estructura del Proyecto

```
hablar_c1/
├── index.html      # Página principal del juego
├── styles.css      # Estilos CSS
├── game.js         # Lógica del juego
└── README.md       # Este archivo
```

## 🎨 Personalización

Puedes modificar fácilmente:

1. **Preguntas**: Edita el array `questions` en `game.js`
2. **Estilos**: Modifica `styles.css` para cambiar colores, fuentes, etc.
3. **Número de preguntas**: Añade o elimina elementos del array `questions`

## 📝 Formato de las Preguntas

Cada pregunta sigue este formato en el archivo `game.js`:

```javascript
{
    question: "Texto de la pregunta",
    options: ["opción1", "opción2", "opción3", "opción4"],
    correct: 0, // Índice de la respuesta correcta (0-based)
    explanation: "Explicación detallada de la respuesta"
}
```

## 🌍 Compatibilidad

- Chrome (recomendado)
- Firefox
- Safari
- Edge
- Opera

## 📱 Responsive Design

El juego se adapta automáticamente a:
- Desktop (pantallas grandes)
- Tablets
- Móviles

## 🎓 Nivel

Este juego está diseñado específicamente para estudiantes de **nivel C1** según el Marco Común Europeo de Referencia para las Lenguas (MCER).

## 💡 Consejos para Profesores

1. **Pre-juego**: Pida a los estudiantes que lean la sección de teoría
2. **Durante el juego**: Anímelos a pensar en voz alta sus respuestas
3. **Post-juego**: Discutan los errores comunes en clase
4. **Extensión**: Pídales que creen sus propias oraciones con las expresiones aprendidas

## 📊 Evaluación

El sistema de puntuación:
- **90-100%**: Excelente dominio
- **70-89%**: Bueno, con algunos errores menores
- **50-69%**: Satisfactorio, necesita repasar
- **0-49%**: Necesita más práctica

## 🔧 Tecnologías Usadas

- HTML5
- CSS3 (con variables CSS y Flexbox/Grid)
- JavaScript (ES6+)
- Google Fonts (Poppins)

## 📝 Licencia

Este juego es de código abierto y puede ser utilizado libremente para fines educativos.

---

**¡Disfruta aprendiendo las expresiones con el verbo HABLAR!** 🎉
