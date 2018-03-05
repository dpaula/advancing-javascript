let filtro = document.querySelector("#filtrar-tabela");

//inclui um evento de input (na hora de inserir no campo) no campo filtro
filtro.addEventListener("input", function (){
    //pega as linhas dos pacientes
    var pacientes = document.querySelectorAll(".paciente");

    //itera sobre os pacientes
    pacientes.forEach(paciente =>{
        //pega o nome (conteudo do campo que tem a classe info-nome)
        var nome = paciente.querySelector(".info-nome").textContent;

        //usando pesquisa com expressão regular, passando o campo que quero q valide na busca
        //e dizendo q será case Insensitive
        let expressao = new RegExp(this.value, "i");

        //testando se o nome tem alguma letra da expressao
        //ou não tem nada, então remove a classe q deixa a linha invisivel
        if(expressao.test(nome) || this.value.length == 0){
            paciente.classList.remove("invisivel");
        }else{
            //senão inclui uma classe css q deixa a linha invisivel
            paciente.classList.add("invisivel");
        }
    });
});