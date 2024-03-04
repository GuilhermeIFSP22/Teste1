
function Primo (numero : number) : boolean{

    if(numero <= 1) {
      return false;
    }
    else{
      for(let i = 2; i < numero; i++){
        if(numero%i == 0){
          return false;
        }
      }
      return true;
    } 
  }
  
  if(Primo(15)){
    console.log("É PRIMO");
  }else{
    console.log("NÃO É PRIMO");
  }