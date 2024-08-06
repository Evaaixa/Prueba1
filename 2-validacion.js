function validarNombre(){
    let nombreTxt = document.getElementById('nombre').value;
    let nombreErrorTxt = document.getElementById('nombreError');
    if(nombreTxt.trim().length < 3){
        nombreErrorTxt.textContent = 'El nombre debe tener al menos 3 caracteres.';
        document.getElementById('nombre').classList.add('error-input');
        document.getElementById('nombre').classList.remove('success');
        return false;
    }else{
        nombreErrorTxt.textContent = '';
        document.getElementById('nombre').classList.add('success');
        document.getElementById('nombre').classList.remove('error-input');
        return true;
    }
}

function validarEmail(){
    let esCorrecto = true;
    let emailTxt = document.getElementById('email').value;
    let emailErrorTxt = document.getElementById('emailError');
    let emailRegex = new RegExp('/^ [a-zA-Z0-9._%+-]+@ [a-zA-Z0-9.-]+. [a-zA-Z] {2,}$/');

    if (emailRegex.test(emailTxt.trim())){
        document.getElementById('email').classList.add('error-input');
        document.getElementById('email').classList.remove('success');
        emailErrorTxt.textContent = '';
        return false;
    }else{
        esCorrecto = false;
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.remove('error-input');
        emailErrorTxt.textContent = 'Por favor, introduce un email válido.';
        return esCorrecto;
    }
}

function validarPassword(){
    let passwordTxt = document.getElementById('password').value;
    let passwordErrorTxt = document.getElementById ('passwordError');

    if (passwordTxt.trim().length < 6){
        document.getElementById('password').classList.add('error-input');
        document.getElementById('password').classList.remove('success');
        passwordErrorTxt.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return false;
    }else{
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.remove('error-input');
        passwordErrorTxt.textContent = '';
        return true;
    }
}

function confirmarPassword(){
    let passwordTxt = document.getElementById('password').value;
    let confirmarPasswordTxt = document.getElementById('confirmarPassword').value;
    let confirmarPasswordErrorTxt = document.getElementById('errorConfirmarContrasena');
    if(passwordTxt.trim() !== confirmarPasswordTxt.trim()){
        document.getElementById('confirmarPassword').classList.add('error-input');
        document.getElementById('confirmarPassword').classList.remove('success');
        confirmarPasswordErrorTxt.textContent = 'Las contraseñas no coinciden';
        return false;
    }else{
        document.getElementById('confirmarPassword').classList.add('success');
        document.getElementById('confirmarPassword').classList.remove('error-input');
        confirmarPasswordErrorTxt.textContent = '';
        return true;
    }
}

//Agregar eventos para la validación en tiempo real
document.getElementById('nombre').addEventListener('input', validarNombre);
document.getElementById('email').addEventListener('input', validarEmail);
document.getElementById('password').addEventListener('input', validarPassword);
document.getElementById('confirmarPassword').addEventListener('input', confirmarPassword);

//capturar evento submit
document.getElementById('registroForm').addEventListener('submit', function(event){

    let isNombreValid = validarNombre();
    let isEmailValid = validarEmail();
    let isPasswordValid = validarPassword();
    let isConfirmarPasswordValid = confirmarPassword();

    if(isNombreValid && isEmailValid && isEmailValid && isConfirmarPasswordValid){
        alert('Formulario enviado con éxito!');
        this.reset();
    }else{

    }
})

