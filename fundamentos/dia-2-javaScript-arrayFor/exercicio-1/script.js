let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*for (i = 0; i<numbers.length; i++) {
    console.log(numbers[i])
};*/

/* somando elementos de um array

let soma = 0;
 for (let i = 0; i< numbers.length; i += 1){
    soma = soma + numbers[i];
 }
 console.log(soma);*/

 /* calculanda a media de uma array*

 let soma = 0;
 let media = 0;
 for (let i = 0; i< numbers.length; i += 1)  {
    soma = soma + numbers[i];
    media = soma / numbers.length;
 }
 if (media > 20) {
    console.log('valor da media maior que 20')
 }
 else {
    console.log('valor da media menor ou igual a 20')
 }*/

 /*encontrando maior numero de um array

 let maior = 0;
 for (let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > maior ) {
       maior = numbers[i];
    }
 }
 console.log(maior)*/

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;


let impar = 0;
 for (let i = 0; i<numbers.length; i += 1){
     if(numbers[i] % 2  !== 0){
      impar = impar + 1;
     }
   }
  
   if (impar === 0) {
      console.log('numero impar não encontrado');
   }
   else {
      console.log(impar);
   }*/

   //Utilizando for, descubra qual o menor valor contido no array e imprima-o

   // let menorValor = numbers[0];
   // for (let i=0; i < numbers.length; i += 1){
   //    if (numbers[i] < menorValor){
   //       menorValor = numbers[i];
   //    }
   // }
   // console.log('Menor numero do array: ' + menorValor);

//   crie um array que vá de 1 até 25 e imprima o resultado.

// let array = [];

// for (let i = 1; i <= 25; i += 1){
//    array.push(i);
// }
// console.log(array);


// imprima o resultado da divisão de cada um dos elementos por 2

for (let i = 0; i < numbers.length; i += 1) {
   console.log(numbers[i] / 2);
};












