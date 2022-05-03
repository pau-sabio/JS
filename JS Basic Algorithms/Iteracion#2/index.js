//1.1//
const character = {name: 'Jack Sparrow', age: 10};
age = 25;

console.log(age);

//1.2//
var firstName 
var lastName 
var age 

firstName = 'Jon';
lastName = 'Snow'; 
age = 24

console.log(firstName);
console.log(lastName);
console.log(age);

var message = 'Soy ' + firstName +' '+lastName + ', tengo ' + age + ' años y me gustan los lobos.';
console.log(message)

//1.3//
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

var sumaprecio = toy1.price + toy2.price;
console.log(sumaprecio);

//1.4//
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
console.log(globalBasePrice);

car1.finalPrice = car1.basePrice + globalBasePrice;
console.log(car1.finalPrice);

car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car2.finalPrice);