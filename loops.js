let favDrinks = ["Water", "Lemonade", "Orange Juice"];

console.log(favDrinks[0]);
console.log(favDrinks[1]);
console.log(favDrinks[2]);

console.log("      ");

for (let i = 0; i < favDrinks.length; i++) {
  console.log(favDrinks[i]);
}

let multiplesOf2 = [];

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    multiplesOf2.push(i);
  }
}

console.log(`multiples of 2 are: ${multiplesOf2}`);

let age = 15;

while (age < 18) {
  console.log("youre still a child");
  age++;
}
console.log("youre an adult");

let cards = ["Diamond", "Spades", "Hearts", "Clubs"];
let currentCard = "Clubs";

while (currentCard != "Spades") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log(currentCard);

favFilms = [
  "interstellar",
  "Joker",
  "Last Samurai",
  "Tomb Raider",
  "Star Wars",
];

favFilms.splice(2, 0, "Star Trek", "Beverly Hills Cop");
console.log(favFilms);

for (let i = 0; i < favFilms.length; i++) {
  console.log(favFilms[i]);
}

const randomNumber = [];
for (let i = 0; i < 20; i++) {
  randomNumber.push(Math.random() * 50);
}
console.log(randomNumber);

var countdown = 10;
{
  while (countdown > 0) {
    console.log(countdown);
    countdown = countdown - 1;
  }
  console.log("Finished!");
}

films = ["interstellar", "Joker", "Last Samurai", "Tomb Raider", "Star Wars"];
for (let i = 0; i < films.length; i++) {
  console.log(films[i]);
}

if (films[2] === "Ghostbusters") {
  console.log("Yay! Its Ghostbusters");
} else {
  console.log("BOOOO...Its not Ghostbusters");
}

const randoNumber = [];
for (let i = 0; i < 6; i++) {
  randoNumber.push(Math.floor(Math.random() * 30));
}
console.log(randoNumber);

randoNumber.forEach(function (randoNumber) {
  if (randoNumber % 7 === 0) {
    console.log("Divisible by 7");
  } else {
    console.log("Not Divisible by 7");
  }
});

let bobsFollowers = ["dan", "james", "bill", "leon"];
let hannahsFollowers = ["james", "jeremy", "patrick", "dan"];

for (i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < hannahsFollowers.length; j++) {
    if (bobsFollowers[i] == hannahsFollowers[j]) {
      console.log(`${bobsFollowers[i]} is friends with Hannah as well as Bob`);
      continue;
    }
  }
}
