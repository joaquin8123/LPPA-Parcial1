window.onload = function(){

    let buttonSubmit = document.getElementById('button-submit');
   
    
  
    let edad = document.getElementById('edad');

    buttonSubmit.addEventListener("click", function () {
        validarApellido()
        validarNombre()
        validarEmail()
        validarEdad()
        // validarSexo()
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

// function validarSexo(){
//     let hombre = document.getElementById('hombre');
//     let mujer = document.getElementById('mujer');
//     let otro = document.getElementById('otro');
//     let sexoError = document.getElementById('sexoError');
//     console.log(hombre,mujer,otro);
//     if (!hombre.value || !mujer.value || !otro.value ) {
//         console.log('Error sexo');
//         edadError.classList.remove('hiddenError');
//       return false
//     }else{
//         edadError.classList.add('hiddenError');
//     }
//     return true
// }