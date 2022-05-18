/*4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNames1 = users.map(user => {
	return user.name;
});

console.log(usersNames1)




/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/

const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNames2 = users.map(user => {
	const firstLetter = user.name.charAt(0);
	if (firstLetter === 'A') {
		return 'Anacleto';
	} else {
		return user.name;
	}
});

console.log(usersNames2);


/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/

const cities = [
	{isVisited:true, name1: 'Tokyo'}, 
	{isVisited:false, name1: 'Madagascar'},
	{isVisited:true, name1: 'Amsterdam'}, 
	{isVisited:false, name1: 'Seul'}
];

const citiesVisited = cities.map(names => {
	return cities.name;
});

console.log(citiesVisited);



