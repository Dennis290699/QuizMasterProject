// Obtener el nombre del login resgistrado
const playerNameElement = document.getElementById('playerName');
const playerName = localStorage.getItem('player');
if (playerName) {
  playerNameElement.textContent = playerName;
}

// Obtener referencia al elemento del contador de tiempo
const timerElement = document.querySelector('.timer');

// Establecer el tiempo inicial en segundos
let timeInSeconds = 0;

// Función para actualizar el contador de tiempo
const updateTimer = () => {
  // Incrementar el tiempo en segundos
  timeInSeconds++;

  // Calcular minutos y segundos
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  // Formatear los minutos y segundos como cadenas de dos dígitos
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  // Actualizar el contenido del contador de tiempo
  timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
};

// Iniciar el contador de tiempo
setInterval(updateTimer, 1000); // Llama a updateTimer cada segundo (1000 milisegundos)

// Validacion de las preguntas

const quizForm = document.getElementById('quizForm');

if (playerName) {
  playerNameElement.textContent = playerName;
}

quizForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(quizForm);

  let score = 0;
  let userAnswers = {};

  for (let [question, answer] of formData) {
    userAnswers[question] = answer;
  }

  // Evaluar las respuestas del usuario
  if (userAnswers.q1 === 'a') {
    score++;
  }
  if (userAnswers.q2 === 'b') {
    score++;
  }
  if (userAnswers.q3 === 'a') {
    score++;
  }
  if (userAnswers.q4 === 'a') {
    score++;
  }
  if (userAnswers.q5 === 'c') {
    score++;
  }
  if (userAnswers.q6 === 'a') {
    score++;
  }
  if (userAnswers.q7 === 'c') {
    score++;
  }
  if (userAnswers.q8 === 'a') {
    score++;
  }
  if (userAnswers.q9 === 'a') {
    score++;
  }
  if (userAnswers.q10 === 'c') {
    score++;
  }

  // Mostrar la puntuación final
  // alert(`¡${playerName}! Tu puntuación es: ${score}/5`);
  // Aquí puedes agregar más lógica para procesar la puntuación, mostrar resultados, etc.
  // Por ejemplo, podrías guardar la puntuación en localStorage o enviarla a un servidor.
  // Guardar el puntaje en localStorage
  localStorage.setItem('score', score);
  // Redireccionar a otra página
  window.location.href = 'results.html';
});

// Boton de cancelar
const cancelButton = document.querySelector('button[type="cancel"]');

cancelButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del formulario
  window.location.href = '../index.html'; // Redirecciona a la página index.html
});
