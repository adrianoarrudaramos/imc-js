var pacientes = document.querySelectorAll(".paciente");

//console.log(pacientes);

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    // console.log(event.target);
    // console.log("-------");
    // console.log(this);
    //event.target.parentNode

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

    // setTimeout(() => {
    //     event.target.parentNode.remove();
    // }, 500);
});

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com duplo clique");
//         console.log(this);
//         //this.remove();
//     });
// });

