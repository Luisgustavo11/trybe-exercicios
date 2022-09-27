/*const n1 = 10;
const n2 = 20;
const n3 = 2;
/* 1-exer
adicao = n1 + n2;
console.log(adicao);

subtracao = n1 - n2;
console.log(subtracao);

multiplicacao = n1 * n2;
console.log(multiplicacao);

divisao = n1 / n2;
console.log(divisao);*/

/* 2-exer
if (n1 < n2) {
    console.log(n2);
}
else (n1 > n2) {
    console.log(n1)
}*/

/*3-exer
if (n1 > n2 && n1 > n3) {
    console.log(n1);
}
else if (n2 > n1 && n2 > n3) {
    console.log(n2)
}
else {
    console.log(n3)
}*/

/*4-exer
const numero = 10;

if (numero > 0) {
    console.log('positive');
}
else if (numero < 0) {
    console.log('negative');
}
else {
    console.log('zero');
}*/

/*5-exer
const area1 = 50;
const area2 = 50;
const area3 = 80;

soma = area1 + area2 + area3;
const todasAreas = area1 > 0 && area2 > 0 && area3 > 0;

if (soma == 180) {
    console.log(true);
}
else if(soma != 180){
    console.log(false);
}
else {
    console.log('ERRO!!')
}*/

/*6-exer
let peca = 'rainha';

switch (peca.toLowerCase()) {
    case 'peão':
        console.log('movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.');
        break;
    case 'bispo' :
        console.log ('move-se ao longo da diagonal. Não pode pular outras peças');
        break;
    case 'rainha': 
        console.log('move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças');
        break;
    case 'rei':
        console.log('mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
        break;
    case 'cavalo':
        console.log('O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa');
        break;
    case 'torre':
        console.log('movimenta-se pela vertical ou horizontal, mas não pode pular outras peças');
        break;        
}*/

/*7-exer
let porcentagem = 80;

if (porcentagem >= 90) {
    console.log('Nota A')
}
else if (porcentagem >= 80) {
    console.log('Nota B')
}
else if (porcentagem >= 70) {
    console.log('Nota C')
}
else if (porcentagem >= 60) {
    console.log('Nota D')
}
else if (porcentagem >= 50) {
    console.log('Nota E') 
}
else if (porcentagem < 50) {
    console.log('Nota F')
}*/

/*8-exr verificando se o número é par
const nu1 = 3;
const nu2 = 5;
const nu3 = 7;

let par = false;

if(nu1 % 2 === 0 || nu2 % 2 === 0 || nu3 % 2 === 0) {
    par = true;
}
console.log(par)*/

/*9-exer verificando se o número é impar
const nu4 = 13;
const nu5 = 5;
const nu6 = 9; 

let impar = false;

if (nu4 % 2 !== 0 || nu5 % 2 !== 0 || nu6 % 2 !== 0) {
    impar = true;
};
console.log(impar);8*/

/*10- exer calculando lucro de venda de 1000 produtos com imposto de 20%*
const custo = 12;
const venda = 18;

if (custo >= 0 && venda >= 0) {
    const custoTotal = custo * 1.2;
    const lucroTotal = (venda - custoTotal) * 1000; 
    console.log(lucroTotal);
}
else {
    console.log("Erro");
}*/


let INSS;
let aliIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
     INSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
     INSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
     INSS = grossSalary * 0.11;
} else {
     INSS = 570.88;
}

const baseSalary = grossSalary - INSS;

if (baseSalary <= 1903.98) {
  aliIR = 0;
} else if (baseSalary <= 2826.65) {
  aliIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliIR = (baseSalary * 0.225) - 636.13;
} else {
  aliIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliIR));

