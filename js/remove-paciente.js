let pacients = document.querySelectorAll(".paciente");
//console.log(pacients);

var tabela = document.querySelector("#tabela-pacientes");
//adiciona um evento para escutar o duplo clique na tabela
tabela.addEventListener("dblclick", function (event) {
    //busca o alvo do duplo clique
    let alvoEvento = event.target;
    //pega o componente pai do alvo clicado
    let paiDoAlvo = alvoEvento.parentNode;
    //inclui classe css para apagar a linha em 5s
    paiDoAlvo.classList.add("fadeOut");
    
    //espera 5 segundos para executar a linha
    setTimeout(() => {
        // remove o componennte (tr)
        paiDoAlvo.remove();
    }, 500);

});

//incluindo evento de duplo clique em um paciente, e removendo o mesmo
// pacients.forEach(paciente => {
//     paciente.addEventListener("dblclick", function () {
//         this.remove();
//     });
// }); 