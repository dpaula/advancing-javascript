let pacients = document.querySelectorAll(".paciente");
console.log(pacients);

//incluindo evento de duplo clique em um paciente, e removendo o mesmo
pacients.forEach(paciente => {
    paciente.addEventListener("dblclick", function () {
        this.remove();
    });
}); 