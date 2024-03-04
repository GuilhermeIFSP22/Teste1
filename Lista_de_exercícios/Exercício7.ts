let valor : number =  100;
let porcentagem : number = 0.8;

function AcrescimoPerc (v : number, perc : number) : number{

    return v * (perc + 1);  
}

console.log(AcrescimoPerc(valor,porcentagem));