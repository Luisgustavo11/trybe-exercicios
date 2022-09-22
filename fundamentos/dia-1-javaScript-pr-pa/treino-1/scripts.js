/* variavel do tipo let podem receber outro valor como no exemplo a baixo*/
/* variavel do tipo const não pode ser alterado o valor*/

/*treino-1
let age = 20;
age =30;
let name = "Huck"
console.log(age);
console.log(nome);*/

/* treino-2
const myName ="Luis";
const birthCity = "São Paulo";
let birthYear = "1995";
console.log(birthYear);
console.log(birthCity);*/

/* treino-3
const base = 5;
const heigth = 8;
const area = base * heigth;
 console.log(area);
 const perimeter = 5 + 5 + 8 + 8; 
console.log(perimeter); */

/*Treino-4
const nota=77;
if (nota >= 80) {
    console.log('Parabéns, você foi aprovada(o)!');
}
else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
}
else {
    console.log('Você foi reprovada(o)');
}*/

/*treino-5
const currentHour = 8;
let message;
if (currentHour >= 22) {
   message = 'Não deveríamos comer nada, é hora de dormir” na variável';
   console.log(message);
}
else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D” na variável';
    console.log(message);
}
else if (currentHour >= 14 && currentHour < 18) {
    message ='Vamos fazer um bolo pro café da tarde?';
    console.log(message);
}
else if (currentHour => 11 && currentHour <= 14) {
    message = 'Hora do almoço!!!';
    console.log(message);
} 
else if(currentHour => 4 && currentHour <= 11) {
    message = 'Hmmm, cheiro de café recém-passado” na variável';
    console.log(message)
} */

const condi = 'reprovada';
switch (condi) {
    case 'aprovada':
      console.log('Parabéns, você foi aprovada(o)!');
    break;
    case 'lista':
      console.log('Você está na nossa lista de espera');
      break;
    case 'reprovada':
      console.log('Você foi reprovada(o)')
    break;
    default:
      console.log('Informação incorreta');
}
