/*
const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
    */

const findTheOldest = function(people) {
//Carly = 28, Ray = 49, Jane = 29

    let oldest = {};    
    people.forEach((person, index) => {
        people[index].age = getAge(person);
    });
    people.sort((a,b) => {
        return b.age - a.age;
    });
    //console.log(people);
    return people[0];
};

function getAge(person){
    return (person.yearOfDeath ? person.yearOfDeath : 2026) - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
