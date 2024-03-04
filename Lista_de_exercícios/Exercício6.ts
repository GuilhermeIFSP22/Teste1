let lista : number [] = [1,2,3,4,5];
let lista2 : string [] = ["a","b","c","d","e"];

function inverterNum (...lista : number[]){

  return lista.reverse();
}

function inverterString (...lista : String[]){

  return lista.reverse();
}

console.log(inverterNum(...lista));
console.log(inverterString(...lista2));