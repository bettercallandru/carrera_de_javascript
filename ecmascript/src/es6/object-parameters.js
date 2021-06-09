let name = 'Adrian';
let age = 18;

//before
let obj1 = {
	name: name,
	age: age,
};

//after
let obj2 = { name, age };

console.log(obj1);
console.log(obj2);
