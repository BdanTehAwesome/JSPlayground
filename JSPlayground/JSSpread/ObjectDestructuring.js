const personOne = {
    name: 'Jim',
    age: 24,
    address: {
        city: 'New York',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Ann',
    age: 45,
    address: {
        city: 'Dublin',
        state: 'One of them'
    },
    favfood: 'Fries'
}

const {name:firstName, age, favfood = 'Pizza'} = personTwo;

const {...rest} = personOne;

console.log(firstName);
console.log(age);
console.log(favfood);
console.log(rest);


//Pass this method an object parameters are auto assigned - pretty cool :)
function printUser({name, age, favfood = 'Pie'}) { 
    console.log(`Name is: ${name}. Age is ${age}. Food is ${favfood}`);
}
printUser(personOne)
printUser(personTwo)