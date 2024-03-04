let array : number [] = [1,2,20,4,5,6,7,8]

function SomarPar (...array : number []) {

    let soma : number = 0;

    for (let i = 0; i < array.length; i++){

      if(array[i] % 2 == 0){
        soma += array[i];
    }
}
  return soma;
}

console.log(SomarPar(...array));