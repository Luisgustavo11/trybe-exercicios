 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

        2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
        4. Crie e execute uma função que corrija o texto da tag <h1>.
        5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
        6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */

        // requisito 1:

       function meuTexto() {
        let paragrafos = document.getElementsByTagName('p')[1];
        paragrafos.innerHTML ='Quero vencer!'
       }
       meuTexto();

// requisito 2:

function mudadnoCor () {
    let novaCor = document.getElementsByClassName('main-content')[0];
    novaCor.style.background = 'rgb(76,164,109)';
}
mudadnoCor();

// requisito 3

function mudadnoCorbranco () {
    let novaCor2 = document.getElementsByClassName('center-content')[0];
    novaCor2.style.background = "white";
}
mudadnoCorbranco();

// requisito 4

function titulo () {
    let corrigindo = document.querySelector('.title');
    corrigindo.innerText = 'Exercício - JavaScript';
}
titulo();

// requisito 5

function maiúsculo () {
    let aumLetra = document.getElementsByTagName('p')[0];
    aumLetra.innerHTML = aumLetra.innerHTML.toUpperCase();
}
maiúsculo();

// requisito 6

function exibirTags () {
    let mostraTag = document.getElementsByTagName('p');
    for (let i = 0; i < mostraTag.lenght; i += 1) {
        console.log(mostraTag[i].innerHTML);
    } 
}
exibirTags();







