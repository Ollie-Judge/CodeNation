let weather = "Sunny";

if (weather === "Sunny") {
  console.log("Well, I better wear some suncream!");
} else if (weather === "rainy") {
  console.log("Better take an umberella!");
} else {
  console.log("hmm, it could go either way!");
}

if (1 === "1") {
  console.log("true");
} else {
  console.log("false");
}

if (1 != "1") {
  console.log("true");
} else {
  console.log("false");
}

let place = "Manchester";
let aWeather = "Cloudy";

if (place === "Manchester" && aWeather === "Sunny") {
  console.log("Check again!");
} else if (place === "Manchester" && aWeather === "Rain") {
  console.log("Obviously");
} else {
  console.log("What? It isnt raining?");
}

let car = "peugot";
switch (car) {
  case "Ford":
  case "GM":
    console.log("Youve got an american car");
    break;
  case "peugot":
  case "Citroen":
    console.log("Youve got a French car");
    break;
  case "Honda":
  case "Toyota":
  case "Suzuki":
    console.log("Youve got a Japanese car");
    break;
  case "Mercedes":
    console.log("Youve got a German car");
    break;
  case "Hyundi":
  case "Kia":
    console.log("Youve got a Korean car");
    break;
  default:
    console.log("Your car is not in the top 10 countries in the world!");
}

let age = 36;
let nation = "UK";

if (age > 17) {
  console.log("Yes i can serve you");
} else {
  console.log("i cant serve you");
}

if (age > 17 && nation === "UK") {
  console.log("Yes youre eligable");
} else {
  console.log("nope sorry");
}

let favPizza = "Peperoni";
switch (favPizza) {
  case "Cheese":
    console.log("Not one of my favourites");
    break;
  case "Olives":
    console.log("Not one of my favourites");
    break;
  case "Capers":
    console.log("Not one of my favourites");
    break;
  case "Chilli":
    console.log("This is one of my favourites");
    break;
  case "Peperoni":
    console.log("This is one of my favourites");
    break;
  default:
    console.log("This is not one of my favourite ingrediants");
}

let password = "password";
if (password.length < 8) {
  console.log("Your password is too short");
} else {
  console.log("your password is fine");
}

let num = 2;
if (num % 5 === 0 || num % 3 === 0) {
  console.log("This number is divisible by 3 or 5");
} else {
  console.log("This number is NOT divisible by 3 or 5");
}

let aNum = 1;
if (aNum % 3 === 0) {
  console.log("Fizz");
} else if (aNum % 5 === 0) {
  console.log("Buzz");
} else if (aNum % 5 === 0 || aNum % 3 === 0) {
  console.log("Fizz Buzz");
} else {
  console.log("num");
}

let bNum = "1051";
let bNumReversed = bNum.split("").reverse().join("");

if (bNum === bNumReversed) {
  console.log("The number is a palindrome");
} else {
  console.log("The number is NOT a palindrome");
}

let time = 22;
let placeOfWork = "Office";
let townOfHome = "Home Town";

if (time < 18 && time > 9) {
  console.log(`im at work in the ${placeOfWork}!`);
} else if (time < 23 && time > 19) {
  console.log(`im at home in ${townOfHome}`);
} else {
  console.log("im sleeping");
}

let string = "qertujkmnbsaesdyuijfberhsghdjqwrtjaeiou";
let vowels = ("a", "e", "i", "o", "u");
const lastVowel = string.lastIndexOf(vowels);

console.log(lastVowel);

let word = "wow";
let start = word.slice(-1);
let end = word.charAt(0);

if (start === end) {
  console.log("true");
} else {
  console.log("false");
}

let num1 = 22;
let num2 = 22;
let total = num1 + num2;

if (total % 2 === 0) {
  console.log("Divisible by 2");
} else {
  console.log("not divisible by 2");
}
