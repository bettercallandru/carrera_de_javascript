//before default params y template strings
/*function printPerson(name, age, country) {
 	var name = name || 'Adrian';
	var age = age || 18;
 	var country = country || 'COL';
    console.log(`${name}, ${age}, ${country}`);
}*/

//after default params y template strings
function printPerson(name = 'Adrian', age = 18, country = 'COL') {
	console.log(`${name}, ${age}, ${country}`);
}

printPerson();
