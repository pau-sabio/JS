const numbers = [12, 21, 38, 5, 45, 37, 6];

function average() {
    let i = 0;
    for (const number of numbers) {
    i += number;
    }
    let media = i / numbers.length;
    return media;
};

console.log(`El promedio obtenido es ${average(numbers)}`);