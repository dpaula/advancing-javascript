let pacients = document.querySelectorAll(".paciente");
//console.log(pacients);

var tabela = document.querySelector("#tabela-pacientes");
//adiciona um evento para escutar o duplo clique na tabela
tabela.addEventListener("dblclick", function (event) {
    //busca o alvo do duplo clique
    let alvoEvento = event.target;
    //pega o componente pai do alvo clicado
    let paiDoAlvo = alvoEvento.parentNode;
    //remove o componennte (tr)
    paiDoAlvo.remove();
});

//incluindo evento de duplo clique em um paciente, e removendo o mesmo
// pacients.forEach(paciente => {
//     paciente.addEventListener("dblclick", function () {
//         this.remove();
//     });
// }); 