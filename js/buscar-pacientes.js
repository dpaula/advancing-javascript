
let btBuscarPaciente = document.querySelector("#buscar-paciente");

//cria um evento de clique para o botao
btBuscarPaciente.addEventListener("click", function () {
    
    //instancia um controlador de xml response request
    let xhr = new XMLHttpRequest();

    //abre com a url com metodo get
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    //cria evento para carregar a url e trazer os dados
    xhr.addEventListener("load", function () {
        //imprime o conteudo como texto
        console.log(xhr.responseText);
    });

    //envia a requisição
    xhr.send();
    
});