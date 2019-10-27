class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }
    buscaNegociacoes(){
        return new Promise( (result, reject) =>{
            this._http.get('negociacoes/semana')
            .then(response =>{
               let negociacoes =  response.map( obj => new Negociacao(new Date(obj.data),obj.quantidade, obj.valor));
               result(negociacoes);
            })
            .catch(err => {
                console.log(err);
                reject('Não foi possivel recuperar as negociacoes semanais');
            })
        })      
    }
    buscaNegociacoesSemanaPassada(){
        return new Promise( (result, reject) =>{
            this._http.get('negociacoes/anterior')
            .then(response =>{
               let negociacoes =  response.map( obj => new Negociacao(new Date(obj.data),obj.quantidade, obj.valor));
               result(negociacoes);
            })
            .catch(err => {
                console.log(err);
                reject('Não foi possivel recuperar as negociacoes da semana anterior');
            })
        })      
    }
    buscaNegociacoesSemanaRetrasada(){
        return new Promise( (result, reject) =>{
            this._http.get('negociacoes/retrasada')
            .then(response =>{
               let negociacoes =  response.map( obj => new Negociacao(new Date(obj.data),obj.quantidade, obj.valor));
               result(negociacoes);
            })
            .catch(err => {
                console.log(err);
                reject('Não foi possivel recuperar as negociacoes da semana retrasada');
            })
        })      
    }
}