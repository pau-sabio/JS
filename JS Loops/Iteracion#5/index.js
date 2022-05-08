const placesToTravel5 = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
];

for (let index = 0; index < placesToTravel5.length; index++) {
    if (placesToTravel5[index].id === 11 || placesToTravel5[index].id === 40){
        placesToTravel5.splice(index, 1);
    };    
};
console.log(placesToTravel5);