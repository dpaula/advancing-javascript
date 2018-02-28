var titulo = document.querySelector(".titulo");
console.log(titulo);

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdGordura = paciente.querySelector(".info-gordura");
var gordura = tdGordura.textContent;

var imc = peso / (altura*altura);

console.log(imc);
