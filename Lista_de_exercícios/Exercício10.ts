let numero : number = 7;

function Fatorial (n : number) : number{
  
  let fat : number = 1;

   for(fat; n > 1; n = n - 1) {

      fat = fat * n;
  }
  return fat;
}

console.log(Fatorial(numero));