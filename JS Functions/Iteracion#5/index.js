const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(mixed) {
    let suma = 0;
    for (let i = 0; i < mixed.length; i++) {
        if(typeof mixed[i] === 'string') {
        suma += mixed[i].length;
    }else{
        suma += mixed[i];
    };
};
return suma;
};

console.log(averageWord(mixedElements));