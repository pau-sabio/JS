function findArrayIndex(array, text) {

    for (const iterator of array) {
        
        if (iterator===text){
            return array.indexOf(iterator);
        }

    }
}

const miarray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log('Posición para Caracol ->',findArrayIndex(miarray,'Caracol'));

console.log('Posición para Salamandra ->',findArrayIndex(miarray,'Salamandra'));