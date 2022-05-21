

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");
    var imc = peso / (altura * altura);  
    tdIMC.textContent = imc;

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    if(!pesoEsValido){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(!alturaEsValida){
        console.log("Altura incorrecta");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
        
    }

    if (pesoEsValido && alturaEsValida) {
        tdIMC.textContent = calcularIMC(peso, altura);
    }
}

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso) {
    if (peso >= 0 && altura < 1000) {
        return true;
    } else {
        return false;
    }
}

function validarAltura(altura) {
    if (altura >= 0 && altura < 3) {
        return true;
    } else {
        return false;
    }   
}



// class .nombre
// id #nombre  
//condicionales if para convalidar los valores
// con or basta que una sea verdadera para que sea false
// con amber las dos tienen que ser verdaderas
//imc peso / altura * altura 
//100 / 2 * 2 = 100 / 4 = 25
//var titulo = document.querySelector(".titulo");
//console.log(titulo);
//console.log(titulo.textContent);	
//titulo.textContent = "Buena vida Nutricion";
//alert("soy una alerta js");
//console.log("Hola mundo");
//console.log("Estoy imprimiendo desde una fuente externa que es principal.js");

