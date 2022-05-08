const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function finderName(item, i) {
    for (let name of nameFinder) {
		if (name === i) {
			return item.indexOf(name);
		};
	};
	return false;
};

console.log(finderName(nameFinder, 'Peter',));
