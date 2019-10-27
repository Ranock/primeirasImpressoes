let pacientes = document.querySelectorAll('.paciente')

//let imcv = imc.textContent;
for(let i=0; i < pacientes.length; i++){
    let paciente = pacientes[i];
    let peso = paciente.querySelector(".info-peso");
    let altura = paciente.querySelector(".info-altura");
    let imc = paciente.querySelector(".info-imc");
    let pesov = peso.textContent ;
    let alturav = altura.textContent ;
    let valida = true;
    if (pesov >= 1000 || pesov <=0 || alturav >=  3 || alturav <=0 )
        valida = false;
    if (valida)
     imc.textContent =calculaImc(pesov, alturav)
    else{
        imc.textContent = 'ERRR';
        paciente.classList.add("erro");
    }

}

function calculaImc(peso, altura){
    let res = peso / (altura*altura);
    return res.toFixed(2);
}