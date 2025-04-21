// Question Data
const questions = {
    diet: [
        {
            text: "¿Pesas o mides tus comidas regularmente?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Conoces las calorías y macronutrientes que tu cuerpo necesita en reposo para mantener la masa muscular que ya tienes?",
            options: ["No tengo idea", "Idea vaga", "Aproximadamente", "Con precisión"],
            scores: [1, 2, 3, 4]
        },
        {
            text: "¿Utilizas suplementos (como proteína, creatina o multivitamínicos) para optimizar tu rendimiento o salud?",
            options: ["Nunca", "Rara vez", "A veces", "Regularmente"],
            scores: [1, 2, 3, 4]
        },
        {
            text: "¿Tu dieta actual te genera ansiedad o estrés?",
            options: ["Siempre", "A menudo", "Rara vez", "Nunca"],
            scores: [1, 2, 3, 4]
        },
        {
            text: "¿Incluyes una fuente de proteína en cada comida?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Limitas los alimentos ultraprocesados a menos de dos veces por semana?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Sabes cuánta agua debes consumir diariamente según tu peso corporal?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Te sientes con energía después de tus comidas?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Experimentas hinchazón o problemas digestivos después de comer?",
            options: ["No", "Sí"],
            scores: [4, 1]
        },
        {
            text: "¿Planificas tus comidas semanalmente?",
            options: ["Sí", "No"],
            scores: [4, 1]
        }
    ],
    exercise: [
        {
            text: "¿Entrenas de 3 a 5 veces por semana?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Incluyes entrenamiento de fuerza de 2 a 4 veces por semana?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Realizas cardio de 1 a 3 veces por semana?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Incorporas ejercicios que trabajen múltiples grupos musculares en tus rutinas?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Está tu rutina actual adaptada a tus objetivos?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Sigues un plan de entrenamiento estructurado?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Te resulta difícil completar tus series con buena técnica?",
            options: ["No", "Sí"],
            scores: [4, 1]
        },
        {
            text: "¿Registras tu progreso (por ejemplo, levantamientos, fotos)?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Entrenas de 45 a 90 minutos por sesión?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Sientes dolor muscular de inicio tardío (DOMS) después de tus entrenamientos?",
            options: ["Siempre", "A menudo", "Rara vez", "Nunca"],
            scores: [1, 2, 3, 4]
        }
    ],
    recovery: [
        {
            text: "¿Duermes de 7 a 8 horas por noche?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Utilizas un dispositivo para monitorear las etapas de tu sueño?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Despiertas sintiéndote descansado?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Mantienes un horario de sueño consistente (por ejemplo, te duermes a la misma hora)?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Experimentas un sueño profundo?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Te despiertas por la noche para ir al baño?",
            options: ["No", "Sí"],
            scores: [4, 1]
        },
        {
            text: "¿Tomas de 1 a 2 días de descanso completo a la semana?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Realizas estiramientos o ejercicios de movilidad semanalmente?",
            options: ["Sí", "No"],
            scores: [4, 1]
        },
        {
            text: "¿Qué tan recargado mentalmente te sientes a diario?",
            options: ["Nada", "Poco", "Moderado", "Muy"],
            scores: [1, 2, 3, 4]
        },
        {
            text: "¿Qué tan resiliente te sientes frente al estrés?",
            options: ["Nada", "Poco", "Moderado", "Muy"],
            scores: [1, 2, 3, 4]
        },
        {
            text: "¿Duermes lo suficiente para sentirte descansado?",
            options: ["Nada", "Poco", "Moderado", "Muy"],
            scores: [1, 2, 3, 4]
        },
        {
            text: "¿Tienes una rutina de sueño consistente?",
            options: ["Nada", "Poco", "Moderado", "Muy"],
            scores: [1, 2, 3, 4]
        },
        {
            text: "¿Practicas técnicas de relajación o meditación?",
            options: ["Nada", "Poco", "Moderado", "Muy"],
            scores: [1, 2, 3, 4]
        },
        {
            text: "¿Tomas descansos activos durante el día?",
            options: ["Nada", "Poco", "Moderado", "Muy"],
            scores: [1, 2, 3, 4]
        },
        {
            text: "¿Realizas estiramientos o movilidad regularmente?",
            options: ["Nada", "Poco", "Moderado", "Muy"],
            scores: [1, 2, 3, 4]
        }
    ]
};

// State Management
const currentState = {
    gender: null,
    goal: null,
    currentQuestionIndex: 0,
    currentSection: null,
    answers: {
        diet: new Array(questions.diet.length).fill(0),
        exercise: new Array(questions.exercise.length).fill(0),
        recovery: new Array(questions.recovery.length).fill(0)
    },
    scores: {
        diet: 0,
        exercise: 0,
        recovery: 0
    }
};

// User info storage
let userInfo = {
    fullName: '',
    email: '',
    phone: '',
    isSubmitted: false
};

// Utility Functions
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

function logError(error, context) {
    console.error(`[${context}] Error:`, error);
    fetch('/log-error', {
        method: 'POST',
        body: JSON.stringify({ error: error.message, context, timestamp: new Date() })
    }).catch(() => {});
}

function saveState() {
    localStorage.setItem('quizState', JSON.stringify({
        currentState,
        userInfo
    }));
}

function loadState() {
    const saved = localStorage.getItem('quizState');
    if (saved) {
        const { currentState: savedState, userInfo: savedUserInfo } = JSON.parse(saved);
        Object.assign(currentState, savedState);
        Object.assign(userInfo, savedUserInfo);
    }
}

// Screen Management
function showScreen(screenId) {
    if (!userInfo.isSubmitted && screenId !== 'welcome-screen') {
        alert('Por favor, complete el formulario primero para continuar.');
        return;
    }

    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
        console.log('Screen shown:', screenId);
    } else {
        console.error('Screen not found:', screenId);
    }
}

// Form Submission Helper
async function submitFormWithRetry(form, maxRetries = 3) {
    let retries = maxRetries;
    while (retries > 0) {
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                return { success: true };
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error en el envío');
            }
        } catch (error) {
            logError(error, 'FormSubmission');
            retries--;
            if (retries === 0) {
                return { success: false, error };
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadState();

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            try {
                const fullName = sanitizeInput(document.getElementById('full-name').value.trim());
                const email = sanitizeInput(document.getElementById('contact-email').value.trim());
                const phone = sanitizeInput(document.getElementById('phone-number').value.trim());

                if (!fullName || !email || !phone) {
                    throw new Error('Por favor, complete todos los campos.');
                }
                if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    throw new Error('Por favor, ingrese un correo electrónico válido.');
                }
                if (!phone.match(/^\+?\d{7,15}$/)) {
                    throw new Error('Por favor, ingrese un número de teléfono válido (7-15 dígitos).');
                }

                submitButton.textContent = 'Enviando...';
                submitButton.disabled = true;

                userInfo.fullName = fullName;
                userInfo.email = email;
                userInfo.phone = phone;

                const result = await submitFormWithRetry(contactForm);
                if (result.success) {
                    userInfo.isSubmitted = true;
                    saveState();
                    showScreen('gender-selection');
                } else {
                    throw result.error;
                }
            } catch (error) {
                alert(error.message || 'Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // Handle gender selection
    const genderCards = document.querySelectorAll('.gender-card');
    genderCards.forEach(card => {
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Seleccionar género ${card.getAttribute('data-gender')}`);
        card.setAttribute('tabindex', '0');

        const handleGenderSelection = (e) => {
            const selectedGender = e.currentTarget.getAttribute('data-gender');
            currentState.gender = selectedGender;

            if (!questions.recovery.some(q => q.isGenderSpecific)) {
                const genderQuestion = selectedGender === 'mujer' ? {
                    text: "¿Ajustas tu descanso durante períodos de mayor fatiga física, como la menstruación o el estrés?",
                    options: ["Nada", "Poco", "Moderado", "Muy"],
                    scores: [1, 2, 3, 4],
                    isGenderSpecific: true
                } : {
                    text: "¿Te despiertas con erecciones matutinas?",
                    options: ["Nada", "Poco", "Moderado", "Muy"],
                    scores: [1, 2, 3, 4],
                    isGenderSpecific: true
                };
                questions.recovery.push(genderQuestion);
                currentState.answers.recovery = new Array(questions.recovery.length).fill(0);
            }

            saveState();
            setTimeout(() => showScreen('goal-selection'), 500);
        };

        card.addEventListener('click', handleGenderSelection);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleGenderSelection(e);
            }
        });
    });

    // Handle goal selection
    const goalCards = document.querySelectorAll('.goal-card');
    goalCards.forEach(card => {
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Seleccionar objetivo ${card.getAttribute('data-goal')}`);
        card.setAttribute('tabindex', '0');

        const handleGoalSelection = (e) => {
            goalCards.forEach(c => c.classList.remove('selected', 'clicked'));
            card.classList.add('selected', 'clicked');

            currentState.goal = e.currentTarget.getAttribute('data-goal');
            currentState.currentSection = 'diet';
            currentState.currentQuestionIndex = 0;

            saveState();
            setTimeout(() => card.classList.remove('clicked'), 500);
            setTimeout(() => {
                showScreen('questionnaire');
                loadQuestion();
            }, 500);
        };

        card.addEventListener('click', handleGoalSelection);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleGoalSelection(e);
            }
        });
    });

    // Handle CTA buttons
    const redirectToPlans = () => {
        window.location.href = 'https://www.queenross.fit/planes/';
    };
    document.getElementById('personalized-plan')?.addEventListener('click', redirectToPlans);
    document.getElementById('upsell-cta')?.addEventListener('click', redirectToPlans);

    // Handle back navigation
    document.getElementById('back-button')?.addEventListener('click', () => {
        if (currentState.currentQuestionIndex > 0) {
            currentState.currentQuestionIndex--;
            loadQuestion();
        } else {
            const sections = ['diet', 'exercise', 'recovery'];
            const currentIndex = sections.indexOf(currentState.currentSection);
            if (currentIndex > 0) {
                currentState.currentSection = sections[currentIndex - 1];
                currentState.currentQuestionIndex = questions[currentState.currentSection].length - 1;
                loadQuestion();
            } else {
                showScreen('goal-selection');
            }
        }
        saveState();
    });
});

// Question Loading
let isLoadingQuestion = false;

function loadQuestion() {
    if (isLoadingQuestion) return;
    isLoadingQuestion = true;

    const section = currentState.currentSection;
    const index = currentState.currentQuestionIndex;

    if (!questions[section] || index >= questions[section].length) {
        const sections = ['diet', 'exercise', 'recovery'];
        const currentIndex = sections.indexOf(section);

        if (currentIndex < sections.length - 1) {
            currentState.currentSection = sections[currentIndex + 1];
            currentState.currentQuestionIndex = 0;
            loadQuestion();
        } else {
            document.getElementById('questionnaire')?.classList.remove('active');
            triggerConfetti().then(() => {
                showResults();
            });
        }
        isLoadingQuestion = false;
        return;
    }

    const question = questions[section][index];
    const questionsContainer = document.getElementById('questions-container');
    if (!questionsContainer) {
        logError(new Error('Questions container not found'), 'LoadQuestion');
        isLoadingQuestion = false;
        return;
    }

    const emoji = section === 'diet' ? '🍎' : section === 'exercise' ? '🏋️' : '💤';
    const name = section === 'diet' ? 'Dieta' : section === 'exercise' ? 'Ejercicio' : 'Recuperación';
    document.querySelector('.category-header').innerHTML = `<span class="category-emoji">${emoji}</span> ${name}`;

    const questionCard = document.createElement('div');
    questionCard.className = 'question-card';
    questionCard.innerHTML = `
        <h3 class="text-2xl font-bold mb-6">${question.text}</h3>
        <div class="flex flex-wrap justify-center gap-4">
            ${question.options.map((option, i) => `
                <button class="option-button" data-score="${question.scores[i]}">${option}</button>
            `).join('')}
        </div>
    `;

    questionsContainer.innerHTML = '';
    questionsContainer.appendChild(questionCard);
    questionsContainer.scrollTo({ top: 0, behavior: 'smooth' });

    questionCard.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', () => {
            const score = parseInt(button.dataset.score);
            currentState.answers[section][index] = score;
            currentState.currentQuestionIndex++;
            saveState();
            setTimeout(() => loadQuestion(), 100);
        });

        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });

    updateProgress();
    setTimeout(() => isLoadingQuestion = false, 100);
}

function updateProgress() {
    const section = currentState.currentSection;
    const progress = (currentState.currentQuestionIndex / questions[section].length) * 100;
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = `${Math.min(progress, 100)}%`;
    }
}

// Results Handling
function showResults() {
    localStorage.removeItem('quizState');
    const results = calculateResults();
    const totalScore = results.overallScore;
    const improvementNeeded = 100 - totalScore;

    const resultsScreen = document.getElementById('results');
    if (!resultsScreen) {
        logError(new Error('Results screen not found'), 'ShowResults');
        return;
    }

    const formScores = document.getElementById('form-scores');
    const formGender = document.getElementById('form-gender');
    const formGoal = document.getElementById('form-goal');
    if (formScores && formGender && formGoal) {
        formScores.value = JSON.stringify({
            userInfo,
            total: totalScore,
            improvement: improvementNeeded,
            categories: results.categoryScores,
            details: currentState.answers
        });
        formGender.value = currentState.gender;
        formGoal.value = currentState.goal;
    }

    const resultForm = document.getElementById('result-form');
    if (resultForm) {
        resultForm.removeEventListener('submit', resultForm._submitHandler);
        const submitHandler = async (e) => {
            e.preventDefault();
            const submitButton = resultForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            try {
                submitButton.textContent = 'Enviando...';
                submitButton.disabled = true;
                const response = await fetch(resultForm.action, {
                    method: 'POST',
                    body: new FormData(resultForm),
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    alert('¡Gracias! Te hemos enviado el análisis a tu correo.');
                    setTimeout(() => {
                        window.location.href = 'https://www.queenross.fit/planes/';
                    }, 1500);
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                logError(error, 'ResultFormSubmission');
                alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        };
        resultForm._submitHandler = submitHandler;
        resultForm.addEventListener('submit', submitHandler);
    }

    const currentPotentialElement = document.getElementById('current-potential');
    const improvementPotentialElement = document.getElementById('improvement-potential');
    if (currentPotentialElement) {
        currentPotentialElement.textContent = totalScore;
        currentPotentialElement.style.color = '#ff3b30';
        currentPotentialElement.style.fontWeight = 'bold';
    }
    if (improvementPotentialElement) {
        improvementPotentialElement.textContent = improvementNeeded;
        improvementPotentialElement.style.color = '#007AFF';
        improvementPotentialElement.style.fontWeight = 'bold';
    }

    const getScoreColor = (score) => {
        if (score >= 86) return '#34c759';
        if (score >= 71) return '#ffd60a';
        if (score >= 51) return '#ff9500';
        return '#ff3b30';
    };

    ['diet', 'exercise', 'recovery'].forEach(category => {
        const scoreElement = document.getElementById(`${category}-score`);
        if (scoreElement) {
            const valueElement = scoreElement.querySelector('.value');
            if (valueElement) {
                const score = results.categoryScores[category];
                valueElement.textContent = `${score}%`;
                valueElement.style.color = getScoreColor(score);
            }
        }
    });

    resultsScreen.classList.remove('hidden');
    resultsScreen.classList.add('active');
    createCharts();
    updateDetailedScores();
    generateInsights();
}

function calculateResults() {
    const categories = ['diet', 'exercise', 'recovery'];
    let totalPoints = 0;
    let maxPossiblePoints = 0;

    categories.forEach(category => {
        const answers = currentState.answers[category];
        const categoryMaxPoints = questions[category].reduce((sum, q) => sum + Math.max(...q.scores), 0);
        const categoryPoints = answers.reduce((sum, score) => sum + score, 0);
        const percentage = Math.round((categoryPoints / categoryMaxPoints) * 100);
        currentState.scores[category] = percentage;
        totalPoints += categoryPoints;
        maxPossiblePoints += categoryMaxPoints;
    });

    const overallPercentage = Math.round((totalPoints / maxPossiblePoints) * 100);
    return {
        categoryScores: currentState.scores,
        overallScore: overallPercentage
    };
}

function createCharts() {
    if (typeof Chart === 'undefined') {
        logError(new Error('Chart.js not loaded'), 'CreateCharts');
        return;
    }

    const radarCtx = document.getElementById('radarChart');
    const progressCtx = document.getElementById('progressChart');
    if (!radarCtx || !progressCtx) {
        logError(new Error('Chart canvas elements not found'), 'CreateCharts');
        return;
    }

    try {
        new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['Dieta', 'Ejercicio', 'Recuperación'],
                datasets: [{
                    label: 'Tus Puntajes',
                    data: [
                        currentState.scores.diet || 0,
                        currentState.scores.exercise || 0,
                        currentState.scores.recovery || 0
                    ],
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: { line: { borderWidth: 3 } },
                scales: {
                    r: {
                        angleLines: { display: true },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: { stepSize: 20 }
                    }
                }
            }
        });

        new Chart(progressCtx, {
            type: 'doughnut',
            data: {
                labels: ['Dieta', 'Ejercicio', 'Recuperación'],
                datasets: [{
                    data: [
                        currentState.scores.diet || 0,
                        currentState.scores.exercise || 0,
                        currentState.scores.recovery || 0
                    ],
                    backgroundColor: [
                        'rgba(52, 211, 153, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(139, 92, 246, 0.8)'
                    ],
                    borderColor: [
                        'rgba(52, 211, 153, 1)',
                        'rgba(59, 130, 246, 1)',
                        'rgba(139, 92, 246, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                animation: { animateRotate: true, animateScale: false },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { padding: 20, usePointStyle: true }
                    }
                }
            }
        });

        const overallScore = Math.round(
            Object.values(currentState.scores).reduce((sum, score) => sum + (score || 0), 0) /
            Object.keys(currentState.scores).length
        );
        const radarLabel = document.getElementById('radar-label');
        if (radarLabel) {
            radarLabel.textContent = `Puntaje General: ${overallScore}%`;
        }
    } catch (error) {
        logError(error, 'CreateCharts');
        [radarCtx, progressCtx].forEach(canvas => {
            if (canvas) {
                const container = canvas.parentElement;
                if (container) {
                    container.innerHTML = `
                        <div class="chart-error">
                            <p>Lo sentimos, no se pudieron cargar los gráficos.</p>
                            <p>Tus puntajes son:</p>
                            <ul>
                                <li>Dieta: ${currentState.scores.diet || 0}%</li>
                                <li>Ejercicio: ${currentState.scores.exercise || 0}%</li>
                                <li>Recuperación: ${currentState.scores.recovery || 0}%</li>
                            </ul>
                        </div>
                    `;
                }
            }
        });
    }
}

function generateInsights() {
    const insightsContainer = document.getElementById('insights');
    if (!insightsContainer) return;

    const lowestCategory = Object.entries(currentState.scores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
    let insights = [];
    if (currentState.goal === 'muscle') {
        if (currentState.scores[lowestCategory] < 60) {
            insights = [
                "Tu ingesta de proteínas es insuficiente para el crecimiento muscular. Un plan de comidas estructurado puede aumentar tus ganancias en un 30%.",
                "El entrenamiento inconsistente limita la hipertrofia. Sigue un programa comprobado para maximizar el reclutamiento de fibras musculares.",
                "El sueño deficiente obstaculiza la reparación muscular. Optimiza tu descanso con estrategias expertas."
            ];
        } else if (currentState.scores[lowestCategory] < 80) {
            insights = [
                "Tu dieta es sólida, pero el momento de las comidas podría mejorar la síntesis muscular. Afina con orientación experta.",
                "Tu rutina es fuerte, pero la sobrecarga progresiva es clave para las ganancias. Obtén un plan personalizado para romper mesetas.",
                "Los días de descanso son buenos, pero la recuperación activa puede acelerar el crecimiento. Aprende técnicas avanzadas."
            ];
        } else {
            insights = [
                "Tu nutrición es de élite, pero ajustes en micronutrientes pueden llevarte más lejos. Optimiza con precisión.",
                "Tu entrenamiento es de primer nivel. Añade técnicas avanzadas como series descendentes para dominar.",
                "Tu recuperación es estelar. Refina la resiliencia mental para un enfoque inquebrantable."
            ];
        }
    } else {
        if (currentState.scores[lowestCategory] < 60) {
            insights = [
                "Los alimentos ultraprocesados están frenando la pérdida de grasa. Un plan de dieta limpia puede quemar calorías más rápido.",
                "La falta de cardio limita la quema de grasa. Una rutina estructurada puede duplicar tus resultados.",
                "El sueño deficiente eleva el cortisol, atrapando grasa. Corrígelo con estrategias comprobadas."
            ];
        } else if (currentState.scores[lowestCategory] < 80) {
            insights = [
                "Tu dieta es decente, pero el control de porciones podría acelerar la pérdida de grasa. Consigue un plan que funcione.",
                "Tus entrenamientos son buenos, pero el HIIT puede encender la quema de grasa. Añádelo con orientación experta.",
                "El estrés está ralentizando tu progreso. Domina técnicas de relajación para resultados más rápidos."
            ];
        } else {
            insights = [
                "Tu dieta es estricta, pero el ciclismo de carbohidratos puede eliminar la última capa. Optimiza con precisión.",
                "Tu rutina es sólida. Añade finalizadores metabólicos para una definición afilada como navaja.",
                "Tu recuperación es excelente. Afina la atención plena para una claridad mental impecable."
            ];
        }
    }

    insightsContainer.innerHTML = `
        <div class="space-y-4">
            ${insights.map(insight => `
                <div class="glass-card">
                    <p class="text-lg">${insight}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function updateDetailedScores() {
    const getScoreColor = (score) => {
        if (score >= 86) return '#34c759';
        if (score >= 71) return '#ffd60a';
        if (score >= 51) return '#ff9500';
        return '#ff3b30';
    };

    const getScoreText = (score) => {
        if (score >= 86) return 'Excelente';
        if (score >= 71) return 'Bueno';
        if (score >= 51) return 'Regular';
        return 'Necesita mejorar';
    };

    ['diet', 'exercise', 'recovery'].forEach(category => {
        const detailsContainer = document.getElementById(`${category}-details`);
        if (!detailsContainer) {
            logError(new Error(`Details container not found for ${category}`), 'UpdateDetailedScores');
            return;
        }

        const answers = currentState.answers[category];
        const categoryQuestions = questions[category];
        if (!answers || !categoryQuestions) {
            logError(new Error(`No answers or questions found for ${category}`), 'UpdateDetailedScores');
            return;
        }

        const detailsHTML = answers.map((score, index) => {
            const question = categoryQuestions[index];
            const color = getScoreColor(score * 25);
            const scoreText = getScoreText(score * 25);
            return `
                <div class="answer-item" style="border-left-color: ${color}">
                    <div class="answer-text">${question.text}</div>
                    <div class="answer-score" style="color: ${color}">
                        <span class="score-badge">${scoreText}</span>
                    </div>
                </div>
            `;
        }).join('');

        detailsContainer.innerHTML = detailsHTML;
    });
}

function triggerConfetti() {
    if (typeof confetti === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return Promise.resolve();
    }

    const duration = 600;
    const end = Date.now() + duration;
    const colors = ['#FF0000', '#FF8800', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF'];
    let frame = 0;
    const maxFrames = 20;

    function animate() {
        if (frame++ > maxFrames || Date.now() >= end) return;

        confetti({
            particleCount: 2,
            angle: 60,
            spread: 40,
            origin: { x: 0 },
            colors: colors,
            ticks: 60,
            gravity: 1.2,
            scalar: 0.8,
            drift: 0,
            velocity: 1.2,
            shapes: ['square'],
            disableForReducedMotion: true
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 40,
            origin: { x: 1 },
            colors: colors,
            ticks: 60,
            gravity: 1.2,
            scalar: 0.8,
            drift: 0,
            velocity: 1.2,
            shapes: ['square'],
            disableForReducedMotion: true
        });

        requestAnimationFrame(animate);
    }

    animate();
    return new Promise(resolve => setTimeout(resolve, duration));
}