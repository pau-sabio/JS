// 1.1 Basándote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
    let li = document.createElement("li");
    li.innerText = countries[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let elem = document.querySelector(".fn-remove-me");
elem.parentElement.removeChild(elem);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div = document.querySelector("[data-function='printHere']");
let ul2 = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
    let li = document.createElement("li");
    li.innerText = cars[i];
    ul2.appendChild(li);
}

div.appendChild(ul2);

// 1.4 Crea dinámicamente en el html una lista de div que contenga un elemento 
// h4 para el título y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let i = 0; i < countries2.length; i++) {
    let div4 = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");

    h4.innerText = countries2[i].title;
    img.src = countries2[i].imgUrl;

    div4.appendChild(h4);
    div4.appendChild(img);

    document.body.appendChild(div4);
}

// 1.5 Basándote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
let btn = document.createElement("button");
btn.innerText = "Borrar último div";

let last = document.body.lastChild;
btn.onclick = function() {last.parentElement.removeChild(last)};

document.body.appendChild(btn);

// 1.6 Basándote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.
let divs = document.querySelectorAll("div:not([data-function='printHere'])");

for (let i = 0; i < divs.length; i++) {
    let newBtn = document.createElement("button");
    newBtn.innerText = "Borrar elemento";

    newBtn.onclick = function() {divs[i].parentElement.removeChild(divs[i])};
    divs[i].appendChild(newBtn);
}