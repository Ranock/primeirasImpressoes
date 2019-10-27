class NegociacoesView extends View{

    constructor(elemento){
        super(elemento);
    }
    
    _template(modelo){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${modelo.negociacoes.map(x =>{
                    return `
                        <tr>
                            <td>${DateHelper.dateToText(x.data)}</td>
                            <td>${x.quantidade}</td>
                            <td>${x.valor}</td>
                            <td>${x.volume}</td>
                        <tr>
                    `
                }).join('')}
            </tbody>

            <tfoot>
            <td colspan="3"></td>
            <td >
                ${modelo.negociacoes.reduce((total, elemento) => total + elemento.volume, 0.0)}
            </td>
            </tfoot>
        </table>`
    }
}

{/*  */}
