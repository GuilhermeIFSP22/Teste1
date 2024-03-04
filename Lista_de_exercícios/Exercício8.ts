let palavra : string = "Meu nome é Guilherme";

function InverterFrase (p : string) : string{
  let separa : string[] = p.split("");
  let junta : string = separa.reverse(). join("");
  return junta;
}

console.log(InverterFrase(palavra));