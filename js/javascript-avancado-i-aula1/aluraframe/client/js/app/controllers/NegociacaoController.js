class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');

        this._lista = new Bind(
                new ListaNegociacoes(),
                new NegociacoesView($('#negociacoes-view')),
                'adiciona', 'esvazia'
             );        
        this._mensagem = new Bind(new Mensagem(),  new MensagemView($('#mensagem')), 'texto');
    }

    recuperaNegociacoes(){
        let negociacaoService = new NegociacaoService();
        Promise.all([negociacaoService.buscaNegociacoes(),
                    negociacaoService.buscaNegociacoesSemanaPassada(),
                    negociacaoService.buscaNegociacoesSemanaRetrasada(),
                    ])
                    .then( resolve => {
                        resolve .reduce( (resultArray, array) =>{
                                    return resultArray.concat(array)
                                }, [])
                                .forEach(element => {
                                    this._lista.adiciona(element);
                                    this._mensagem.texto = 'Negociacoes importadas com sucesso';
                                });   
                    })
                    .catch(err => this._mensagem.texto = err)       
    }
    apaga(){
        this._lista.esvazia();
        this._mensagem.texto = 'Negociacoes apagadas';

    }
    adiciona(event){
        event.preventDefault();
        let data = DateHelper.textToDate( this._data.value)
      
        
        let negociacao = new Negociacao(data, this._quantidade.value, this._valor.value);
        this._lista.adiciona(negociacao);
        this._mensagem.texto = 'Negociação adicionada com sucesso';        
    }
}