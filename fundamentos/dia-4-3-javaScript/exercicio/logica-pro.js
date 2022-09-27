// crie um algoritmo que imprima na tela o fatorial de 10

// let fatorial = 1;

// for (let i = 10; i >= 1; i -= 1) {
//     fatorial = fatorial * i;
// }
// console.log(fatorial);

// Invertendo a palavra

// let word = 'tryber';
// let revertWord ='';

// for (let i = 0; i < word.length; i += 1) {
//     revertWord = revertWord + word[word.length - 1 - i];
// }
// console.log(revertWord);

// outra solução para o exercicio acima

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);