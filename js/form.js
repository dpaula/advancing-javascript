
//pegando o formulario
var formu = document.querySelector("#form-adiciona");

var nomeTd2 = formu.nome;
nomeTd2.addEventListener("blur", function(){
    formu.peso.value = '77'
    formu.altura.value = '1.75'
    formu.gordura.value = '20'
})

//pegando o componente
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//criando evento de click para o botão
botaoAdicionar.addEventListener("click", function(event){
    //anulando função default
    event.preventDefault();
    
    //pegando o formulario
    //var formu = document.querySelector("#form-adiciona");

    //extraindo valores do formulario
    var nome = formu.nome.value;
    var peso = formu.peso.value;
    var altura = formu.altura.value;
    var gordura = formu.gordura.value;

    //criando uma tag tr
    var pacienteTr = document.createElement("tr");

    //criando tags tds
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //incluindo os valores extraidos do form nas tags TDs
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(altura, peso);

    //conectando as tags td como filha da tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});