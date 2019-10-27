let btnBuscar = document.querySelector('#buscar-paciente');
btnBuscar.addEventListener('click', x =>{
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');
  xhr.addEventListener('load', x => {
        if (xhr.status == 200) {
            let pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(element => {
                adicionaPaciente(element);
            });
        }else{
            alert('ero ao buscar pacientes')
        }

  })
  xhr.send();
})