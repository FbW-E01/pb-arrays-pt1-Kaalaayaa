const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondItem = euroCities[1];
console.log(euroCities);
console.log(secondItem);
euroCities.splice(0, 1,"Berlin");
euroCities[0] = "Berlin";
console.log(euroCities);

console.log(euroCities.length);

euroCities.pop();
console.log(euroCities);

euroCities[euroCities.length] = "Budapest";
euroCities(euroCities.push("Budapest"));
console.log(euroCities);

euroCities.splice(1, 2);
console.log(euroCities);


const asianCities = ["Bangkok", "Singapour", "Hong Kong", "Ubud", "Goa"];

const someCities = asianCities.slice(1,3);
console.log(someCities);

const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

worldCities.reverse();
console.log(worldCities);

worldCities.splice(2,1, "Toronto");
worldCities[2] = "Toronto";
console.log(worldCities);

worldCities.splice(1,0,"Washington");
console.log(worldCities);

console.log(worldCities.join(", "));
console.log(worldCities.join("+"));

const greeting = "Hello World!";
const greetingChars = greeting.split("");
console.log(greetingChars);
greetingChars.reverse();
console.log(greetingChars.join(""));


const siblings = ["Nyima", "Chakti", "Lakshmi", "Davindy", "Sayathi", "Ivi"];
const parents = ["clift", "Céline"];

const family = siblings.concat(parents);

console.log(family);
family.push("Lucky","Blackie");
console.log(family);
family.reverse();
console.log(family);
family.splice(2,1, "Kushal");
console.log(family);