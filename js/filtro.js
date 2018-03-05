let filtro = document.querySelector("#filtrar-tabela");

//inclui um evento de input (na hora de inserir no campo) no campo filtro
filtro.addEventListener("input", function (){
    //pega as linhas dos pacientes
    var pacientes = document.querySelectorAll(".paciente");

    //itera sobre os pacientes
    pacientes.forEach(paciente =>{
        //pega o nome (conteudo do campo que tem a classe info-nome)
        var nome = paciente.querySelector(".info-nome").textContent;
        //se o nome do campo da tabela for igula ao campo digitado na pesquisa
        //ou não tem nada, então remove a classe q deixa a linha invisivel
        if(nome == this.value || this.value.length == 0){
            paciente.classList.remove("invisivel");
        }else{
            //senão inclui uma classe css q deixa a linha invisivel
            paciente.classList.add("invisivel");
        }
    });
});