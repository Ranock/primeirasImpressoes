let input = document.querySelector('#filtrar-tabela');

input.addEventListener('input', function (event) {
   let tabela = document.querySelectorAll('.paciente');
    tabela.forEach(element => {
        verificaPaciente(element, input.value);
    });
})

function verificaPaciente(paciente, texto){

    let nome = paciente.querySelector('.info-nome').textContent;
    let expressao = new RegExp(texto, 'i')
    if (expressao.test(nome) || texto.length == 0)
        paciente.classList.remove('invisivel')
    else
        paciente.classList.add('invisivel');
}