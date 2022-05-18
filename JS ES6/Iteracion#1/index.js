/*
Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.*/

//1.1 Ejecuta esta función sin pasar ningún parametro

let sumar1 = (a = 10, b = 5) => a + b;
console.log( sumar1() );

//1.2 Ejecuta esta función pasando un solo parametro

let sumar2 = (a, b = 5) => a + b;
console.log( sumar2(10) );

//1.3 Ejecuta esta función pasando dos parametros

let sumar3 = (a, b) => a + b;
console.log( sumar3(10,5) );
