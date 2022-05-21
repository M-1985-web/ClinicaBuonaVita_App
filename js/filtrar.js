//en java script por lo general se utilizan los #id
// en css las .class
//---------------------------------------------
var campoFiltro = document.querySelector("#filtrar-tabla");

//ahora vamos a capturar nuestro evento 
campoFiltro.addEventListener("input",function(){
    //console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    //si hay algo escrito en la caja de texto
    //itera con cada uno de los pacientes de la tabla 
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            //this.value es el valor de mi caja de texto
            var expresionRegular = new RegExp(this.value, "i");
                if (!expresionRegular.test(nombre)) {
                    //esta clase la cree en css
                    paciente.classList.add("invisible");
                } else {
                    paciente.classList.remove("invisible");
                }
        }
    //sino hay nada volveme toda la clase paciente
    } else {
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }


});
