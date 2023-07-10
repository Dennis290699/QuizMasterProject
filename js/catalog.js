// Obtener el nombre del login registrado
const dedicationNameElement = document.getElementById('dedicationName');
const playerName = localStorage.getItem('player');
if (playerName) {
  dedicationNameElement.textContent = playerName;
}

function highlightQuiz(element) {
  element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
  element.style.backgroundColor = '#ebebeb';

  const description = element.querySelector('h2');
  const originalText = description.textContent;
  description.textContent = 'Comenzar intento';

  element.addEventListener('mouseout', function () {
    element.style.boxShadow = '';
    element.style.backgroundColor = '#f8f8f8';
    description.textContent = originalText;
  });
}

function redirectToQuiz(url) {
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function () {
  const quizItems = document.querySelectorAll('.quiz-item');

  quizItems.forEach(function (item) {
    const quizLink = item.querySelector('a');
    const quizUrl = quizLink.getAttribute('href');

    item.addEventListener('click', function (event) {
      event.preventDefault();
      redirectToQuiz(quizUrl);
    });
  });
});

// Obtener todos los elementos de cinta y recorrerlos
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Obtener el elemento hermano siguiente (contenido de la cinta)
    const accordionContent = btn.nextElementSibling;
    // Alternar la clase 'show' en el contenido de la cinta
    accordionContent.classList.toggle('show');
  });
});

// Boton de cancelar
const cancelButton = document.querySelector('button[type="cancel"]');

cancelButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del formulario
  window.location.href = '../index.html'; // Redirecciona a la página index.html
});

// Like
const heartButton = document.getElementById('heartButton');
const heartIcon = document.getElementById('heartIcon');
const heartCount = document.getElementById('heartCount');
const resetButton = document.getElementById('resetButton');

let count = localStorage.getItem('heartCount') || 0;

function formatNumber(number) {
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + 'M';
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + 'K';
  } else {
    return number.toString();
  }
}

heartCount.textContent = formatNumber(count);

heartButton.addEventListener('click', () => {
  heartButton.classList.add('clicked');
  setTimeout(() => {
    heartButton.classList.remove('clicked');
  }, 1000); // Cambia el valor 1000 por el tiempo deseado en milisegundos (por ejemplo, 2000 para 2 segundos)

  count++;
  heartCount.textContent = formatNumber(count);
  heartIcon.classList.toggle('filled');

  localStorage.setItem('heartCount', count);
});

resetButton.addEventListener('click', () => {
  count = 0;
  heartCount.textContent = formatNumber(count);
  localStorage.setItem('heartCount', count);
});
