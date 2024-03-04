function ParImpar(numero:Number) {

    if(typeof numero == 'number' && numero % 2 == 0){
         return true;
    }

    return false;
}

if(ParImpar(5)){
  console.log("É PAR");
}else{
  console.log("É IMPAR");
}