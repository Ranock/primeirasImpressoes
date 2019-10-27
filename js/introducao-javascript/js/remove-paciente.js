let tbody = document.querySelector('#tabela-pacientes');
tbody.addEventListener('dblclick', function (event) {
    excluirElemento(event.target.parentNode);
})

function excluirElemento(elemento){
    
    elemento.classList.add('fadeOut');
    setTimeout(function(){
        elemento.remove();                
    }, 500)
}