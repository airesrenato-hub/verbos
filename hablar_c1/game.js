// Juego didáctico: El Verbo HABLAR y sus Expresiones - Nivel C1

// Base de datos de preguntas
const questions = [
    {
        question: "¿Qué preposición usamos con 'hablar' cuando nos referimos a un tema?",
        options: ["de", "con", "por", "a"],
        correct: 0,
        explanation: "Usamos 'hablar DE' cuando nos referimos a un tema o asunto. Ejemplo: 'Hablamos de política'."
    },
    {
        question: "Completa: 'Ayer _____ con mi amigo sobre el partido de fútbol'.",
        options: ["hablé de", "hablé con", "hablé por", "hablé a"],
        correct: 1,
        explanation: "Usamos 'hablar CON' cuando nos comunicamos con una persona. Ejemplo: 'Hablé con mi amigo'."
    },
    {
        question: "¿Qué expresión significa 'ser directo y sincero'?",
        options: ["hablar por hablar", "hablar claro", "hablar en serio", "hablar a gritos"],
        correct: 1,
        explanation: "'Hablar claro' significa ser directo y sincero, sin rodeos."
    },
    {
        question: "Si alguien dice 'No me gusta la gente que _____', ¿qué expresión completa la frase?",
        options: ["habla claro", "habla por hablar", "habla en serio", "habla a gritos"],
        correct: 1,
        explanation: "'Hablar por hablar' significa hablar sin decir nada importante, por el simple hecho de hablar."
    },
    {
        question: "¿Qué expresión usamos cuando queremos confirmar si alguien dice algo con seriedad?",
        options: ["¿Hablas claro?", "¿Hablas por hablar?", "¿Hablas en serio?", "¿Hablas a gritos?"],
        correct: 2,
        explanation: "'Hablar en serio' significa decir algo con seriedad, no como broma."
    },
    {
        question: "Completa: 'No es necesario _____, te oigo perfectamente'.",
        options: ["hablar claro", "hablar por hablar", "hablar en serio", "hablar a gritos"],
        correct: 3,
        explanation: "'Hablar a gritos' significa hablar muy fuerte, casi gritando."
    },
    {
        question: "¿Qué preposición usamos con 'hablar' cuando usamos el teléfono?",
        options: ["de", "con", "por", "a"],
        correct: 2,
        explanation: "Usamos 'hablar POR teléfono' para indicar el medio de comunicación."
    },
    {
        question: "Completa: 'Prefiero _____ videollamada que por teléfono'.",
        options: ["hablar de", "hablar con", "hablar por", "hablar a"],
        correct: 2,
        explanation: "'Hablar por videollamada' indica el medio de comunicación."
    },
    {
        question: "¿Cuál de estas opciones NO es correcta?",
        options: ["Hablo español", "Hablo con mi madre", "Hablo de política", "Hablo a mi amigo"],
        correct: 3,
        explanation: "La forma correcta es 'Hablo CON mi amigo', no 'Hablo A mi amigo'."
    },
    {
        question: "Completa: 'Nos _____ por teléfono ayer'.",
        options: ["hablamos", "hablamos de", "hablamos con", "hablamos por"],
        correct: 0,
        explanation: "'Hablarse' en forma pronominal: 'Nos hablamos' significa que tuvimos una conversación."
    },
    {
        question: "¿Qué significa 'hablarse' (pronominal)?",
        options: ["Hablar de un tema", "Tener una conversación", "Hablar por teléfono", "Hablar claro"],
        correct: 1,
        explanation: "'Hablarse' (pronominal) significa tener una conversación, generalmente entre dos o más personas."
    },
    {
        question: "Completa: '¿_____ español?' - 'Sí, lo hablo con fluidez'.",
        options: ["Hablas", "Hablas de", "Hablas con", "Hablas por"],
        correct: 0,
        explanation: "'¿Hablas español?' es la forma correcta para preguntar si alguien habla un idioma."
    },
    {
        question: "¿Qué expresión significa 'hablar sin decir nada importante'?",
        options: ["hablar claro", "hablar por hablar", "hablar en serio", "hablar a gritos"],
        correct: 1,
        explanation: "'Hablar por hablar' significa hablar por el simple hecho de hablar, sin contenido importante."
    },
    {
        question: "Completa: 'El profesor _____ de la importancia de la educación'.",
        options: ["habló", "habló con", "habló por", "habló a"],
        correct: 0,
        explanation: "'Habló de' porque se refiere a un tema (la importancia de la educación)."
    },
    {
        question: "¿Cuál es la forma correcta para decir que dominas un idioma?",
        options: ["Hablo el español", "Hablo español", "Hablo al español", "Hablo por español"],
        correct: 1,
        explanation: "La forma correcta es 'Hablo español' (sin artículo)."
    },
    {
        question: "Completa: 'No _____ en serio, solo era una broma'.",
        options: ["hablaba claro", "hablaba por hablar", "hablaba en serio", "hablaba a gritos"],
        correct: 2,
        explanation: "'Hablar en serio' significa decir algo con seriedad. La forma en pasado es 'hablaba en serio'."
    },
    {
        question: "¿Qué expresión usamos cuando alguien habla muy fuerte?",
        options: ["habla claro", "habla por hablar", "habla en serio", "habla a gritos"],
        correct: 3,
        explanation: "'Hablar a gritos' significa hablar muy fuerte, casi gritando."
    },
    {
        question: "Completa: '_____ de ti ayer en la reunión'.",
        options: ["Hablé", "Hablé de", "Hablé con", "Hablé por"],
        correct: 1,
        explanation: "'Hablé de ti' porque 'ti' es el tema de la conversación."
    },
    {
        question: "¿Cuál es la forma incorrecta?",
        options: ["Hablo con mi hermano", "Hablo de mi trabajo", "Hablo por teléfono", "Hablo a mi hermano"],
        correct: 3,
        explanation: "La forma correcta es 'Hablo CON mi hermano', no 'Hablo A mi hermano'."
    },
    {
        question: "Completa: '¿Con quién _____ ayer?' - 'Con mi jefe'.",
        options: ["hablaste", "hablaste de", "hablaste con", "hablaste por"],
        correct: 2,
        explanation: "'¿Con quién hablaste?' - 'Con mi jefe'. Usamos 'hablar con' para personas."
    }
];

// Estado del juego
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let mistakes = [];
let gameStarted = false;

// Elementos del DOM
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const explanationElement = document.getElementById('explanation');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const gameSection = document.getElementById('gameSection');
const theorySection = document.getElementById('theorySection');
const resultsSection = document.getElementById('resultsSection');
const startGameBtn = document.getElementById('startGameBtn');
const finalScoreElement = document.getElementById('finalScore');
const performanceElement = document.getElementById('performance');
const mistakesElement = document.getElementById('mistakes');
const reviewBtn = document.getElementById('reviewBtn');
const restartBtn = document.getElementById('restartBtn');
const theoryBtn = document.getElementById('theoryBtn');

// Inicializar el juego
function initGame() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    mistakes = [];
    gameStarted = true;
    
    // Mostrar sección del juego
    gameSection.style.display = 'block';
    theorySection.style.display = 'none';
    resultsSection.style.display = 'none';
    
    // Cargar la primera pregunta
    loadQuestion();
    
    // Actualizar barra de progreso
    updateProgress();
}

// Cargar una pregunta
function loadQuestion() {
    const question = questions[currentQuestion];
    
    // Mostrar la pregunta
    questionElement.textContent = question.question;
    
    // Limpiar opciones anteriores
    optionsElement.innerHTML = '';
    
    // Crear botones de opciones
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
        
        optionsElement.appendChild(optionElement);
    });
    
    // Limpiar feedback y explicación
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    explanationElement.textContent = '';
    explanationElement.className = 'explanation';
    nextBtn.style.display = 'none';
    
    // Habilitar todas las opciones
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('disabled', 'correct', 'incorrect', 'selected');
    });
}

// Seleccionar una opción
function selectOption(element, index) {
    if (document.querySelectorAll('.option.disabled').length > 0) return;
    
    // Marcar la opción seleccionada
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedOption = index;
}

// Verificar la respuesta
function checkAnswer() {
    if (selectedOption === null) return;
    
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    // Deshabilitar todas las opciones
    options.forEach(option => {
        option.classList.add('disabled');
    });
    
    // Marcar la respuesta correcta
    options[question.correct].classList.add('correct');
    
    // Si la respuesta es correcta
    if (selectedOption === question.correct) {
        score++;
        feedbackElement.textContent = '✅ ¡Correcto!';
        feedbackElement.className = 'feedback correct';
    } else {
        // Marcar la opción seleccionada como incorrecta
        options[selectedOption].classList.add('incorrect');
        feedbackElement.textContent = '❌ Incorrecto';
        feedbackElement.className = 'feedback incorrect';
        
        // Guardar el error
        mistakes.push({
            question: question.question,
            selected: question.options[selectedOption],
            correct: question.options[question.correct]
        });
    }
    
    // Mostrar explicación
    explanationElement.textContent = question.explanation;
    explanationElement.className = 'explanation show';
    
    // Mostrar botón siguiente
    nextBtn.style.display = 'block';
    
    // Actualizar barra de progreso
    updateProgress();
}

// Pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestion++;
    selectedOption = null;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Mostrar resultados
function showResults() {
    gameSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    // Mostrar puntuación
    finalScoreElement.textContent = score;
    
    // Mostrar rendimiento
    const percentage = Math.round((score / questions.length) * 100);
    let performanceMessage = '';
    let performanceClass = '';
    
    if (percentage >= 90) {
        performanceMessage = '🌟 Excelente trabajo! Dominas las expresiones con HABLAR.';
        performanceClass = 'excellent';
    } else if (percentage >= 70) {
        performanceMessage = '👍 Muy bien! Tienes un buen conocimiento.';
        performanceClass = 'good';
    } else if (percentage >= 50) {
        performanceMessage = '📚 Bien, pero puedes mejorar. Revisa la teoría.';
        performanceClass = 'average';
    } else {
        performanceMessage = '💪 Sigue practicando. Necesitas repasar más.';
        performanceClass = 'poor';
    }
    
    performanceElement.innerHTML = `<h4>Rendimiento:</h4><p class="${performanceClass}">${performanceMessage}</p>`;
    
    // Mostrar errores
    if (mistakes.length > 0) {
        let mistakesHTML = '<h4>Errores:</h4>';
        mistakes.forEach((mistake, index) => {
            mistakesHTML += `
                <div class="mistake-item">
                    <strong>Pregunta ${index + 1}:</strong> ${mistake.question}<br>
                    <span style="color: #f44336;">Tu respuesta: ${mistake.selected}</span><br>
                    <span style="color: #4caf50;">Correcta: ${mistake.correct}</span>
                </div>
            `;
        });
        mistakesElement.innerHTML = mistakesHTML;
    } else {
        mistakesElement.innerHTML = '<h4>¡Perfecto! No tienes errores.</h4>';
    }
}

// Actualizar barra de progreso
function updateProgress() {
    const progress = ((currentQuestion + (selectedOption !== null ? 1 : 0)) / questions.length) * 100;
    progressBar.style.setProperty('--width', `${progress}%`);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestion + (selectedOption !== null ? 1 : 0)}/${questions.length}`;
}

// Repasar errores
function reviewMistakes() {
    if (mistakes.length === 0) {
        alert('No tienes errores para repasar.');
        return;
    }
    
    // Volver a empezar el juego pero solo con las preguntas falladas
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    
    // Filtrar preguntas con errores
    const mistakeQuestions = questions.filter((q, index) => {
        return mistakes.some(m => m.question === q.question);
    });
    
    if (mistakeQuestions.length === 0) return;
    
    // Mostrar sección del juego
    gameSection.style.display = 'block';
    resultsSection.style.display = 'none';
    
    // Cargar la primera pregunta de los errores
    const originalQuestions = [...questions];
    questions.length = 0;
    questions.push(...mistakeQuestions);
    
    loadQuestion();
    updateProgress();
    
    // Restaurar preguntas originales después
    setTimeout(() => {
        questions.length = 0;
        questions.push(...originalQuestions);
    }, 100);
}

// Event Listeners
nextBtn.addEventListener('click', nextQuestion);
startGameBtn.addEventListener('click', initGame);
reviewBtn.addEventListener('click', reviewMistakes);
restartBtn.addEventListener('click', initGame);
theoryBtn.addEventListener('click', () => {
    gameSection.style.display = 'none';
    resultsSection.style.display = 'none';
    theorySection.style.display = 'block';
});

// Teclado: Enter para seleccionar, flechas para navegar
optionsElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && selectedOption !== null) {
        checkAnswer();
    }
});

// Iniciar con la teoría
window.addEventListener('load', () => {
    theorySection.style.display = 'block';
    gameSection.style.display = 'none';
    resultsSection.style.display = 'none';
});

// Función para manejar clic en opciones con el ratón
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('option') && !e.target.classList.contains('disabled')) {
        checkAnswer();
    }
});

// Añadir evento para el botón de siguiente con Enter
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && nextBtn.style.display === 'block') {
        nextQuestion();
    }
});
