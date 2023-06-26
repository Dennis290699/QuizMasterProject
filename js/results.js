document.addEventListener('DOMContentLoaded', function () {
  // Obtener referencia al elemento de puntuación
  const scoreElement = document.getElementById('score');

  // Obtener referencia al botón de mostrar respuestas
  const showAnswersButton = document.getElementById('showAnswersButton');

  // Obtener referencia al botón de reintentar
  const retryButton = document.getElementById('retryButton');

  // Obtener referencia a la lista de respuestas
  const answersList = document.getElementById('answers');

  // Obtener la puntuación del almacenamiento local
  const score = localStorage.getItem('score');

  // Obtener las respuestas del usuario del almacenamiento local
  const userAnswers = JSON.parse(localStorage.getItem('userAnswers'));

  // Mostrar la puntuación final
  scoreElement.textContent = score;

  // Definir las preguntas y respuestas correctas
  const correctAnswers = {
    q1: 'a) mkdir',
    q2: 'b) vi',
    q3: 'a) vi',
    q4: 'a) i',
    q5: 'c) :wq',
    q6: 'a) ls',
    q7: 'c) cp',
    q8: 'a) chmod',
    q9: 'a) top',
    q10: 'c) kill'
  };

  // Función para mostrar las respuestas
  const showAnswers = () => {
    // Vaciar la lista de respuestas previas
    answersList.innerHTML = '';

    // Iterar sobre las preguntas y respuestas correctas
    for (let question in correctAnswers) {
      const answerItem = document.createElement('li');
      answerItem.textContent = `Pregunta ${question}: Respuesta correcta: ${correctAnswers[question]}`;

      // Comparar la respuesta del usuario con la respuesta correcta
      if (userAnswers && userAnswers[question] && userAnswers[question] === correctAnswers[question]) {
        answerItem.classList.add('correct');
      } else {
        answerItem.classList.add('incorrect');
      }

      // Agregar la respuesta a la lista
      answersList.appendChild(answerItem);
    }

    // Mostrar el botón de reintentar
    retryButton.style.display = 'inline-block';

    // Ocultar el botón de mostrar respuestas
    showAnswersButton.style.display = 'none';
  };

  // Agregar evento al botón de mostrar respuestas
  showAnswersButton.addEventListener('click', showAnswers);

  // Evento de escucha para el botón de reintentar
  retryButton.addEventListener('click', () => {
    window.location.href = '../pages/quiz.html';
  });

  // Botón de volver
  const backButton = document.querySelector('button[type="backButton"]');
  backButton.addEventListener('click', () => {
    window.location.href = '../index.html'; // Redirecciona a la página index.html
  });
});
