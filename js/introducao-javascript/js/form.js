let botaoAdd = document.querySelector('#adicionar-paciente');
botaoAdd.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector('#form-adiciona');
    let paciente = retornaPaciente(form);
    adicionaPaciente(paciente);
    form.reset();

})

function adicionaPaciente(paciente) {
    let tbody = document.querySelector('#tabela-pacientes');
    tr = retornaTr(paciente);
    tr.appendChild(retornaTd(paciente.nome, 'info-nome'))
    tr.appendChild(retornaTd(paciente.peso, 'info-peso'))
    tr.appendChild(retornaTd(paciente.altura, 'info-altura'))
    tr.appendChild(retornaTd(paciente.gordura, 'info-gordura'))
    tr.appendChild(retornaTd(paciente.imc, 'info-imc'));
    tbody.appendChild(tr);
    
}

function retornaPaciente(form) {
    return {
        peso : form.peso.value,
        altura : form.altura.value,
        nome : form.nome.value,
        gordura: form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
}

function  retornaTr(paciente) {
    let tr = document.createElement('tr');
    tr.classList.add('paciente');
    return tr;
}

function retornaTd(dado, classe){
    let td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}
