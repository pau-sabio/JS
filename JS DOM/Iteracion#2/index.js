//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let midiv = document.createElement('div');
document.querySelector('body').appendChild(midiv);
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let midiv2 = document.createElement('div');
midiv2.appendChild(document.createElement('p'));
document.querySelector('body').appendChild(midiv2);
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let midiv3 = document.createElement('div');
for(let i=0; i<6; i++){
    midiv3.appendChild(document.createElement('p'));
}

document.querySelector('body').appendChild(midiv3);
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let miPDinamico = document.createElement('P');
miPDinamico.innerText = 'Soy dinámico';
document.querySelector('body').appendChild(miPDinamico);
//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let H2 = document.createElement('h2');
H2.className= "fn-insert-here";
H2.innerText= 'Wubba Lubba dub dub';
document.querySelector('body').appendChild(H2);
//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let miUl = document.createElement('ul');

apps.forEach(function(elementos){
    let miLi = document.createElement('li');
    miLi.innerText=elementos;
    miUl.appendChild(miLi);
})
document.body.appendChild(miUl);
//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodos = document.querySelectorAll('[class=fn-remove-me]');
const miArray = Array.from(nodos);

miArray.forEach(function(elemento){
    document.body.removeChild(elemento)
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

let voyMedio = document.createElement('p');
voyMedio.innerText = 'Voy en medio!';

document.body.insertBefore(voyMedio,document.querySelectorAll('div')[1])

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here



const insertHear = document.querySelectorAll('div[class="fn-insert-here"]');
const ArrayInsertHear = Array.from(insertHear);
console.log(insertHear);
ArrayInsertHear.forEach(function(elemento){
    let voyDentro = document.createElement('p');
    voyDentro.innerText = 'Voy dentro!';
    elemento.appendChild(voyDentro);
});