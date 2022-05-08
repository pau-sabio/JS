const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];


function repeatCounter(){

    counterWords.sort();

    var current = 0;
    var count = 0;
    for(var i = 0; i < counterWords.length; i++)
    {
        if(counterWords[i] != current) {
        if(count > 0) {
            console.log(current + " " + count);
        }
        current = counterWords[i];
        count = 1;
        }
        else {
        count++;
        }
    }
}

repeatCounter(counterWords)


