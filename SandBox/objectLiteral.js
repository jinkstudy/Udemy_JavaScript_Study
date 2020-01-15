const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 32,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function () {
        return 2020 - this.age + 1;
    }
}

let val;
val = person;

// Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;  //["music", "sports"]
val = person.address.state; //FL
val = person.address['city']; //Miami
val = person.getBirthYear();//1989

console.log(val);

const people = [
    { name: 'John', age: 30 },
    { name: 'Mike', age: 23 }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}