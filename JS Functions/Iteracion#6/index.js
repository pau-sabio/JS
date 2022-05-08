const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
];
function removeDuplicates() {
    const result = []
    duplicates.forEach((item)=>{
        if(!result.includes(item)){
            result.push(item);
        }
    });
    return result
};

console.log(removeDuplicates(duplicates))