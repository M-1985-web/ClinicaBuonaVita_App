//aca conectamos el boton con js
var botonBuscar = document.querySelector("#buscar-paciente");
//aca capturamos el evento click con el boton
botonBuscar.addEventListener("click", function () {
    //console.log("Buscando pacientes");
    //aca tengo y creo el objeto de la requisicion XMLHttpRequest
    var xhr = new XMLHttpRequest;
    //aca lo habro con get y el link de la api
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    //para cargarlo o envio necesito llamar un evento load
    xhr.addEventListener("load", function () {
        var errorAjax = document.querySelector("#error-ajax");
        
        if (xhr.status == 200) {
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            //console.log(respuesta);
            //console.log(typeof respuesta);
            //con el parse transformo los string para acceder a los pacientes
            var pacientes = JSON.parse(respuesta);
            //console.log(pacientes);
            //console.log(typeof pacientes);
            pacientes.forEach(function(paciente){
                adicionarPacienteEnLaTabla(paciente);
                //console.log(paciente);
            });

        } else {
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }

    });
    //aca lo envio
    xhr.send();
});