class DateHelper{
    static textToDate(texto){
        return  new Date(
            ...texto
                .split('-')
                .map((valor, indice) =>{
                    if (indice == 1)
                     valor--;
                    return valor; 
            })
        )
    }

    static dateToText(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}