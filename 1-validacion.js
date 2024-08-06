
function validarNombre(){
    let nombreTxt = document.getElementById('nombre').value;
    let nombreErrorTxt = document.getElementById('nombreError');
    if(nombreTxt.trim().length < 3){
        nombreErrorTxt.textContent = 'El nombre debe tener al menos 3 caracateres.';
        return false;
    }else{
        nombreErrorTxt.textContent = '';
        return true;
    }
}

function validarEmail(){
    let esCorrecto = true;
    let emailTxt = document.getElementById('email').value;
    let emailErrorTxt = document.getElementById('emailError');
    let emailRegex = new RegExp('/^ [a-zA-Z0-9._%+-]+@ [a-zA-Z0-9.-]+. [a-zA-Z] {2,}$/');

    if (emailRegex.test(emailTxt.trim())){
        emailErrorTxt.textContent = '';
    }else{
        esCorrecto = false;
        emailErrorTxt.textContent = 'Por favor, introduce un email válido.';
    }
    return esCorrecto;
}

function validarPassword(){
    let passwordTxt = document.getElementById('password').value;
    let passwordErrorTxt = document.getElementById ('passwordError');

    if (passwordTxt.trim().length < 6){
        passwordErrorTxt.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return false;
    }else{
        passwordErrorTxt.textContent = '';
        return true;
    }
}

function confirmarPassword(){
    let passwordTxt = document.getElementById('password').value;
    let confirmarPasswordTxt = document.getElementById('confirmPassword').value;
    let confirmarPasswordErrorTxt = document.getElementById('errorConfirmarContrasena');
    if(passwordTxt.trim() !== confirmarPasswordTxt.trim()){
        confirmarPasswordErrorTxt.textContent = 'Las contraseñas no coinciden';
        return false;
    }else{
        confirmarPasswordErrorTxt.textContent = '';
        return true;
    }
}

//capturar evento submit
document.getElementById('registroForm').addEventListener('submit', function(event){
    /* Esta función recibe un argumento de tipo event
    event es un objeto con información sobre el evento
    este evento es de tipo submit */

    //detiene el comportamiento del submit
    event.preventDefault();

    console.log("event:", event);
    //especifica el tipo de evento
    console.log('Tipo de evento', event.type);
    //contiene una referencia al DOM que dispara el evento
    console.log('Elemento', event.currentTarget);
    console.log('Elemento', event.target);
    //tiempo en milisegundos en que ocurrió el evento
    console.log('Tiempo del evento', event.timeStamp);
    //un boleano que indica si el evento fue iniciado por un usuario (true) o por un script (false)
    console.log('Es confiable', event.isTrusted);
    
    let isNombreValid = validarNombre();
    let isEmailValid = validarEmail();
    let isPasswordValid = validarPassword();
    let isConfirmPasswordValid = confirmarPassword();

    if(isNombreValid && isEmailValid && isPasswordValid && isConfirmPasswordValid){
        alert('Formilario enviado con éxito!');
        this.requestFullscreen();
    }else {
        alert('Por favor, corrige los errores del formulario');
    }
})
