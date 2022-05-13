console.log("All Around The World");

console.log("All Around The World".length);

console.log("All Around The World".charAt(7).toUpperCase());

let i = 10;

i = i + 2;

console.log(i);

let A = 10;
A += 2;
console.log(A);

let favouriteDrink = "Coffee";
console.log(favouriteDrink);

console.log("My favourite drink is " + favouriteDrink);

let name = "chris";
let age = 23;
let favDrink = "water";

console.log(
  `My name is  ${name}, my age is  ${age} and my favourite drink is  ${favDrink}.`
);

age = 24;
favDrink = "orange juice";
console.log(
  `My name is  ${name}, my age is  ${age} and my favourite drink is  ${favDrink}.`
);

let aName = "олы";
let anAge = 24;
let favouriteColour = "синий";

console.log(
  `привет, меня зовут  ${aName}, мне  ${anAge} года и мой  люубимый цвет ${favouriteColour}.`
);
aName = "джаймс";
anAge = 45;
favouriteColour = "красный";

console.log(
  `меня зовут  ${aName}, мне ${anAge} года и мой любимый напиток  ${favouriteColour}.`
);

let breakfast = "каша";
let lunch = "макарон салад";
let dinner = "фалафел";

console.log(
  `для завтракат у меня ест: ${breakfast}, для обед у меня был : ${lunch} для ужин у меня был: ${dinner}.`
);

breakfast = "яйцо и помидоры";
lunch = "бургер";
dinner = "суши";

console.log(
  `для завтракат у меня ест: ${breakfast}, для обед у меня был: ${lunch} для ужин у меня был: ${dinner}.`
);

const date = new Date("05/10/2022");
const birthday = new Date("05/15/2022");

let time_difference = birthday.getTime() - date.getTime();

let days_difference = time_difference / (1000 * 60 * 60 * 24);

console.log(
  `сегодня ${date} и мой ден рожденя ${birthday}, это это означает, что что ест ${days_difference} дней до моего дня рождения`
);

let space1 = "x";
let space2 = "o";
let space3 = "o";
let space4 = "x";
let space5 = "x";
let space6 = "o";
let space7 = "x";
let space8 = "o";
let space9 = "o";

console.log(` ${space1}|${space2}|${space3}`);
console.log("------");
console.log(` ${space4}|${space5}|${space6}`);
console.log("------");
console.log(` ${space7}|${space8}|${space9}`);

console.log("      ");
console.log(
  ` ${space1}|${space2}|${space3} \n ------ \n ${space4}|${space5}|${space6} \n ------ \n ${space7}|${space8}|${space9} `
);
