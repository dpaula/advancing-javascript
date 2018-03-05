
//pegando o formulario
var formu = document.querySelector("#form-adiciona");

var nomeTd2 = formu.nome;
//criando um novo listener para ao mudar o foco do campo edit nome, ele carrege os dados
nomeTd2.addEventListener("blur", function () {
    formu.peso.value = '77'
    formu.altura.value = '1.75'
    formu.gordura.value = '20'
})

//pegando o componente
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//criando evento de click para o botão
botaoAdicionar.addEventListener("click", function (event) {
    //anulando função default
    event.preventDefault();

    var paciente = obtemPaciente(formu);

    let erros = pacienteValido(paciente);

    let ul = document.querySelector("#mensagem-erro");
    if (erros.length > 0) {
        ul.innerHTML = "";
        incluiErros(erros, ul)
        return;
    }
    
    adicionaPacienteTabela(paciente);
    
    //limpa os campos do form
    formu.reset();
    ul.innerHTML = "";
});

function adicionaPacienteTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function incluiErros(erros, ul) {
    erros.forEach(erro => {

        let erroLi = document.createElement("li");
        erroLi.textContent = erro;
        ul.appendChild(erroLi);
    });
}

function montaTr(paciente) {

    //criando uma tag tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //conectando as tags td como filha da tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function obtemPaciente(formu) {

    const paciente = {
        nome: formu.nome.value,
        peso: formu.peso.value,
        altura: formu.altura.value,
        gordura: formu.gordura.value,
        imc: calculaImc(formu.altura.value, formu.peso.value)
    }

    return paciente;
}

function pacienteValido(paciente) {
    let erros = [];

    if (!paciente.nome.length) {
        erros.push("Nome em branco!");
    }
    if (!paciente.peso.length) {
        erros.push("Peso em branco!");
    }
    if (!paciente.altura.length) {
        erros.push("Altura em branco!");
    }
    if (!paciente.gordura.length) {
        erros.push("Gordura em branco!");
    }

    if (!pesoEhValido(paciente.peso)) {
        erros.push("Peso inválido!");
    }

    if (!alturaEhValida(paciente.altura)) {
        erros.push("Altura inválida!");
    }

    return erros;
}