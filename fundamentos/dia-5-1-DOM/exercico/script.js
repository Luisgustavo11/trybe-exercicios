// document.getElementById recebendo como parametro um id acessa elementos do codigo

// innerHTML retorna o conteudo junto com as tags

// innerText filtra retornando somente o conteudo

// document.getElementById('test').innerText = 'Olá'; substitue o conteud anterior
// console.log(document.getElementById('test'));

// exemplos de aterações com dom:
// const paragraph = document.getElementById("paragraph");
//         paragraph.style.color = "red";

// console.log(document.getElementById('page-title').innerText = 'Interestelar');
// console.log(document.getElementById("paragraph").style.backgroundColor = 'black');

// document.getElementsByClassName serve para acessar uma lista como ul ou ol e paragrafos com os mesmos id, para isso é necessário aplicar o valor do elemento tipo assim:
// document.getElementsByClassName('exemplo')[0].innertext = 'exemplo';

// para trocar todos todos os elementos de uma lista usando document.getElementsByClassName segue exemplo abaixo:

// let list = document.getElementsByClassName("exemplo-de-id");

// for (let i = 0; i < list.length; i += 1) {
//     list[i].innerText = 'novo-elemento';
// }

// para encontrar ou alerar o conteudo que tiver a mesma tag usamos document.getElementsByTagName

// console.log(document.getElementsByTagName('paragraph').innerText);

// document.querySelector retorna o primeiro item que encontrar ou seja se passarmos uma div ele ira retornar a primeira div que encontrar, então é necessario explicar bem qual elementos queremos como classes usando ponto e id usando #, segue exemplo:

// document.querySelector('#exemplo-de-id');

// document.querySelectorAll