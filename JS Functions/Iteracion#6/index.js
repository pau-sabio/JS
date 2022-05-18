const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
];
function removeDuplicates() {
    const comprobados = []
    duplicates.forEach((item)=>{
        if(!comprobados.includes(item)){
            comprobados.push(item);
        }
    });
    return comprobados
};

console.log(removeDuplicates(duplicates))