const toys = [
    { id: 5, name: "Buzz MyYear" },
    { id: 11, name: "Action Woman" },
    { id: 23, name: "Barbie Man" },
    { id: 40, name: "El gato con Guantes" },
    { id: 40, name: "El gato felix" },
];

for (const toy6 of toys) {
    if (toy6.name.includes('gato')) {
        let toy = toys.indexOf(toy6);
        toys.splice(toy, 2)
    };
};

console.log(toys);

