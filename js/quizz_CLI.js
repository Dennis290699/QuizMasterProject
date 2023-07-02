// Obtener el nombre del login registrado
const playerNameElement = document.getElementById('playerName');
const playerName = localStorage.getItem('player');
if (playerName) {
  playerNameElement.textContent = playerName;
}

// Obtener referencia al elemento del contador de tiempo
const timerElement = document.querySelector('.timer');

// Establecer el tiempo inicial en segundos
let timeInSeconds = 0;
let timerInterval; // Variable para almacenar el intervalo del temporizador

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
timerInterval = setInterval(updateTimer, 1000); // Llama a updateTimer cada segundo (1000 milisegundos)

document.getElementById("quizForm1").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Detener el contador de tiempo
  clearInterval(timerInterval);

  // Deshabilita las opciones de respuesta
  var form = document.getElementById("quizForm1");
  var elements = form.elements;
  for (var i = 0, len = elements.length; i < len; ++i) {
    var element = elements[i];
    if (element.type !== "submit" && element.type !== "button") {
      element.disabled = true;
    }
  }

  // Calcula el puntaje y resalta las respuestas
  var score = calculateScore();
  highlightAnswers();

  var scoreDiv = document.createElement("div");
  scoreDiv.textContent = "Calificacion: " + score + "/10";
  scoreDiv.setAttribute("id", "score");
  scoreDiv.style.display = "none";
  document.querySelector("header").prepend(scoreDiv);
  scoreDiv.style.display = "block";

  // Mostrar el botón de "Reintentar"
  retryButton.style.display = "block";

  // Deshabilita el botón de enviar después de hacer clic en él
  document.querySelector('button[type="submit"]').disabled = true;
});

function calculateScore() {
  var score = 0;
  var form = document.getElementById("quizForm1");
  var elements = form.elements;

  // Recorre todas las preguntas y compara las respuestas seleccionadas con las respuestas correctas
  for (var i = 0, len = elements.length; i < len; ++i) {
    var element = elements[i];
    if (element.checked) {
      // Verifica si la respuesta es correcta
      var questionNumber = element.name.slice(1);
      var correctAnswer = getCorrectAnswer(questionNumber);
      if (element.value === correctAnswer) {
        score++;
      }
    }
  }

  return score;
}

function highlightAnswers() {
  var form = document.getElementById("quizForm1");
  var elements = form.elements;

  // Recorre todas las preguntas y resalta las respuestas correctas e incorrectas
  for (var i = 0, len = elements.length; i < len; ++i) {
    var element = elements[i];
    if (element.checked) {
      // Verifica si la respuesta es correcta
      var questionNumber = element.name.slice(1);
      var correctAnswer = getCorrectAnswer(questionNumber);
      if (element.value === correctAnswer) {
        element.parentNode.classList.add("correct-answer");
      } else {
        element.parentNode.classList.add("incorrect-answer");
      }
    }
  }
}

function getCorrectAnswer(questionNumber) {
  // Define las respuestas correctas para cada pregunta
  var answers = {
    "1": "a",
    "2": "c",
    "3": "d",
    "4": "b",
    "5": "a",
    "6": "b",
    "7": "d",
    "8": "b",
    "9": "a",
    "10": "b"
  };

  return answers[questionNumber];
}

// Obtener una referencia a los botones
const cancelButton = document.querySelector('button[type="cancel"]');
const retryButton = document.getElementById('restartButton');

// Agrega un controlador de eventos al botón "Cancelar"
cancelButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del formulario
  window.location.href = '../pages/catalog.html'; // Redirecciona a la página index.html
});

// Agrega un controlador de eventos al botón "Reintentar"
retryButton.addEventListener('click', function () {
  // Recarga la página
  location.reload();
});

