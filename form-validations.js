window.onload = function(){

    let buttonSubmit = document.getElementById('button-submit');

    buttonSubmit.addEventListener("click", function () {
        validarApellido()
        validarNombre()
        validarEmail()
        validarEdad()
        validarSexo()
        validarJugador()
        validarPais()
    })



}

function validarNombre(){
    let nombre = document.getElementById('nombre');
    let nombreError = document.getElementById('nombreError');
    
    if(nombre.value.length < 3){
        nombreError.classList.remove('hiddenError');
        return false
    }else{
        nombreError.classList.add('hiddenError');
    }
    return true
}

function validarApellido(){
    let apellido = document.getElementById('apellido');
    let apellidoError = document.getElementById('apellidoError');
    
    if(apellido.value.length < 3){
        apellidoError.classList.remove('hiddenError');
        return false
    }else{
        apellidoError.classList.add('hiddenError');
    }
    return true
}

function validarEmail(){
    let email = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    
    let emailRegex =/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email.value)) {
      emailError.classList.remove('hiddenError');
      return false
    }else{
        emailError.classList.add('hiddenError');
    }
    return true
}

function validarEdad(){
    let edad = document.getElementById('edad');
    let edadError = document.getElementById('edadError');
    if (parseInt(edad.value) < 0 || parseInt(edad.value) > 99 || edad.value=='' ) {
        edadError.classList.remove('hiddenError');
        return false
    }else{
        edadError.classList.add('hiddenError');
    }
    return true
}

function validarSexo(){
    let pais = document.getElementById('pais');
    let paisError = document.getElementById('paisError');
    if (pais.value =='null') {
        paisError.classList.remove('hiddenError');
      return false
    }else{
        paisError.classList.add('hiddenError');
    }
    return true
}

function validarJugador(){
    let jugador1 = document.getElementById('jugador1');
    let jugador2 = document.getElementById('jugador2');
    let jugador3 = document.getElementById('jugador3');
    let jugadorError = document.getElementById('jugadorError');
    if (!jugador1.checked && !jugador2.checked && !jugador3.checked) {
        jugadorError.classList.remove('hiddenError');
      return false
    }else{
        jugadorError.classList.add('hiddenError');
    }
    return true
}

function validarPais(){
    let hombre = document.getElementById('hombre');
    let mujer = document.getElementById('mujer');
    let otro = document.getElementById('otro');
    let sexoError = document.getElementById('sexoError');

    if (!hombre.checked && !mujer.checked && !otro.checked) {
        sexoError.classList.remove('hiddenError');
      return false
    }else{
        sexoError.classList.add('hiddenError');
    }
    return true
}