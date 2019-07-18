//let nome = prompt("Digite seu nome");
//let anoDeNascimento = Number(prompt("digite seu ano de nascimento"));
//let idade = 2019-anoDeNascimento;

//console.log("Olá, eu me chamo " + nome +" e tenho " + idade + "anos");


//let nome = prompt("digite seu nome");
//let  matricula = number(prompt("digite sua primeira nota"));

let nota1 = Number(prompt("digite sua primeira nota "));
let nota2 = Number(prompt("digite sua segunda nota"));

let media = (nota1+nota2)/2;

//console.log('o aluno ${nome}, matricula ${matricula}, obetevea media final: ${medía}');


if(media  >= 8){
    console.log("aprovado");
}

else if (media >4){
    console.log("recuperação");
}

else if(media <= 4 ){
    console.log("reprovado")
}

