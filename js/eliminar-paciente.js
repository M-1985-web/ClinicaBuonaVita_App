//aca solo captura pacientes nativos, hay que propagar el evento
//var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

//con el event.target borra especificamente donde hago click
tabla.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();
    },500);
});




/*
pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function () {
        this.remove();
    });
});
*/