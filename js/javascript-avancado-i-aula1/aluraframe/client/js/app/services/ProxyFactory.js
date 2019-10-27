class ProxyFactory {
    static create(modelo, props, acao){
        return new Proxy(modelo, {
            get(target, prop, receiver){
                if (props.includes(prop) && typeof(target[prop]) == typeof(Function)){
                    return function() {
                        console.log('interceptando' + target[prop]);
                        Reflect.apply(target[prop], target, arguments );
                        return acao(target);
                        
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            
            set(target, prop, value, receiver){
                if(props.includes(prop)){
                    target[prop] = value;
                    acao(target)
                }
                return Reflect.set(target, prop, value, receiver)
            }
        } )
    }
}