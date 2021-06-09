let equipo = [
	{ name: 'Javier', age: '18' },
	{ name: 'Tina', age: '18' },
];

//before funciones anonimas
let printTeam = equipo.map(function ({ name }) {
	return name;
});

//after arrow functions
let printTeama = equipo.map(({ name }) => name);

console.log(printTeam);
console.log(printTeam);
