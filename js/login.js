/*VALIDACION DE CARACTERES EN REGISTRO DE NOMBRE */
const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');

const validateInput = ({ target }) => {
    if (target.value.length > 2 ){
        button.removeAttribute('disabled'); //SI SE CUMPLE DESACTIVA EL BOTON
        return;
    } 
    button.setAttribute('disabled', ''); //CASO CONTRARIO LO VUELVE A BLOQUEAR
}

input.addEventListener('input', validateInput);

/* PARA GUARDAR FORMULARIO*/
const form = document.querySelector('.login-form');

const handleSubmit =(event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/quizz.html';
}

form.addEventListener('submit', handleSubmit);

