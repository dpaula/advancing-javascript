var titulo = document.querySelector(".titulo");
console.log(titulo);

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso > 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
        
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 1000){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc.toFixed(2);
    }    
} 

//pegando o componente
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//criando evento de click para o botão
botaoAdicionar.addEventListener("click", function(event){
    //anulando função default
    event.preventDefault();
    
    //pegando o formulario
    var formu = document.querySelector("#form-adiciona");

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

    //conectando as tags td como filha da tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});
    