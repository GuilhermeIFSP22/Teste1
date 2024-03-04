
function MaiorValor(...lista) : number{
    let maior : number = 0;
    for(let i = 0; i < lista.length; i++){
        if (Maior < lista[i]){
            maior = lista[i];
        }
    }
    return maior;
}

let lista : number[] = [13,4,5,6,9,78,0];

console.log(MaiorValor(lista));