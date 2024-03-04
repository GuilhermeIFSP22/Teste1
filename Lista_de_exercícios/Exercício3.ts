let array : number[] = [6,5,8,9,7,5,10,5];

function MediaAritmetica(...array : number[]){

    let resultado : number = 0;

    for(let i = 0; i < array.length; i++ ){
      
      resultado += array[i];
    }
    return resultado/array.length;
}

console.log(MediaAritmetica(...array));