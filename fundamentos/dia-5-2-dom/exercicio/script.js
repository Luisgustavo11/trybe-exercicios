// 1- Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;

const elemH1 = document.createElement('h1');
elemH1.innerText = 'Exercício - JavaScript DOM';
document.body.appendChild(elemH1)

// 2- Adicione a tag main com a classe main-content como filho da tag body;

const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain)

// 3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild (tagSection);

// 4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let tagP = document.createElement('p');
tagP.innerText = 'Vamo que vamo aprender programação';
tagSection.appendChild(tagP);

// 5- Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;

let tagSection2 = document.createElement('section');
tagSection2.className = 'right-content';
tagMain.appendChild(tagSection2);

// 6- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let tagSection3 = document.createElement('section');
tagSection3.className = 'left-content';
tagMain.appendChild(tagSection3);

// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let elemImg = document.createElement('img');
elemImg.className = 'small-image';
elemImg.src = 'https://picsum.photos/200';
tagSection2.appendChild(elemImg);

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listNOrd = document.createElement('ul');
tagSection3.appendChild(listNOrd);
const arrayNumeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
  'Sete', 'Oito', 'Nove', 'Dez'];

  for (let index = 0; index < arrayNumeros.length; index += 1) {
      const elemLi = arrayNumeros[index];
      elemLi.innerHTML = arrayNumeros[index];
  }

// 9- Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
  for (let index = 1; index <= 3; index +=1) {
  const elemH3 = document.createElement('h3');
  elemH3.innerHTML = 'Show ' + index;
  tagMain.appendChild(elemH3);
 }

// 10- Adicione a classe title na tag h1 criada;

  let titulo = document.querySelector('h1');
  titulo.className = 'titulo';

// 11- Adicione a classe description nas 3 tags h3 criadas

 const elementosNoH3 = document.getElementsByTagName('h3')
 for (let index = 0; index < 3; index +=1) {
  elementosNoH3[index].className = 'description';
 }

// 12- Remova a section criado no passo 5 (aquele que possui a classe right-content). Utilize a função .removeChild();
 
  let removendoSection = document.getElementsByTagName('right-content')[0];
  removendoSection.removeChild(tagSection2);

// 13- Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

let centralizaSection = document.getElementsByTagName('right-content')[0];
centralizaSection.style.marginRinght = 'auto';

// 14- Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let trocaDeCorSec = document.getElementsByTagName('center-content')[0];
trocaDeCorSec.style.backgroundColor = 'green';

// 15- Remova os dois últimos elementos (nove e dez) da lista criada no passo 8;

let RemoveElem = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();