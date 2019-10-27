class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }
    esvazia(){
        this._negociacoes.length = 0;
    }
    get negociacoes(){
        return [].concat(this._negociacoes);
    }

}