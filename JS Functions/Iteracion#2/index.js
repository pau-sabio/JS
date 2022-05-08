const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord() {
    let longestword = "";
    for (let i = 0; i < avengers.length; i++) {
        if (longestword.length < avengers[i].length) {
        longestword = avengers[i];
        }
    }
        return longestword;
}

console.log(findLongestWord(avengers));




    
