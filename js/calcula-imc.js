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

    if(!pesoEhValido(peso)){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida(altura)){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido(peso) && alturaEhValida(altura)){
        tdImc.textContent = calculaImc(altura, peso);
    }    
} 

function alturaEhValida(altura){
    let ret = altura > 0 && altura < 3;
    if(ret){
        return true;
    }
    console.log("Altura invalida: "+altura);
    return false;
}

function pesoEhValido(peso){
    let ret = peso > 5 && peso < 400;
    if(ret){
        return true;
    }
    console.log("Peso invalido: "+peso);
    return false;
}

function calculaImc(altura, peso){
    var imc = peso / ( altura * altura);    
    return imc.toFixed(2);
}



    