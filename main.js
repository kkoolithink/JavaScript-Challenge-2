const hobby = "coding";
const hours_per_week = 12;
const fun_level = "ery fun";

console.log(hobby);
console.log(hours_per_week);
console.log(fun_level);

console.log(typeof hobby);
console.log(typeof hours_per_week);
console.log(typeof fun_level);

console.log(`My favorite hobby is ${hobby}.`);
console.log(`I spend about ${hours_per_week} hours per week doing it.`);
console.log(`I think it's ${fun_level}!`);

document.getElementById("#title").textContent = "My Favorite Hobby";
document.getElementById("#description").textContent = `I love ${hobby} and spend about ${hours_per_week} hours per week doing it. It's ${fun_level}!`;