class View{
    constructor(elemento){
        this._elemento = elemento
    }

    _template(modelo){}

    update(modelo){
        this._elemento.innerHTML = this._template(modelo);
    }
}