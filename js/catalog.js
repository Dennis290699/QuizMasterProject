function highlightQuiz(element) {
    element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    element.style.backgroundColor = '#ebebeb';
    
    const description = element.querySelector('h2');
    const originalText = description.textContent;
    description.textContent = 'Comenzar intento';
    
    element.addEventListener('mouseout', function() {
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

// Boton de cancelar
const cancelButton = document.querySelector('button[type="cancel"]');

cancelButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del formulario
  window.location.href = '../index.html'; // Redirecciona a la página index.html
});