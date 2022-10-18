// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
  
  // const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // const sortOddsAndEvens = (array) => {
    
  //   for (let i = 1; i < array.length; i++) {
  //     for (let indexDois= 0; indexDois < i; indexDois += 1) {
  //       if (array[i] < array[indexDois]) {
  //         let position = array[i];
  //         array[i] = array[indexDois];
  //         array[indexDois] = position;
  //       }
  //     }
  //   }
  //   return array;
  // };
  // console.log(sortOddsAndEvens(array));

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortArrayBonus = (array) => {
    const sortOddsAndEvens = array.sort((a, b) => a - b);
    return sortOddsAndEvens;
  };
  
  const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
  console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);