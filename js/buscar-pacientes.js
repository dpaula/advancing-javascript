
let btBuscarPaciente = document.querySelector("#buscar-paciente");

//cria um evento de clique para o botao
btBuscarPaciente.addEventListener("click", function () {
    
    //instancia um controlador de xml response request
    let xhr = new XMLHttpRequest();

    //abre com a url com metodo get
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    //cria evento para carregar a url e trazer os dados
    xhr.addEventListener("load", function () {
        //pegando a resposta da requisição
        var resposta = xhr.responseText;
        //convertendo o texto de json para objeto
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(paciente => {
            //incluindo na tabela
            adicionaPacienteTabela(paciente);
        });

    });

    //envia a requisição
    xhr.send();
    
});