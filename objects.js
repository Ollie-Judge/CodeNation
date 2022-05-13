const cafe = {
  name: "whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: ["cappuccino", "late", "Fliter Coffee", "tea", "Hot Chocolate"],
};

console.log(cafe);

const person = {
  name: "dan",
  age: "46",
};

console.log(person);

person.name;
console.log(person.name);

console.log(person["name"]);

let offer = "none";
let time = 1200;

const cafeA = {
  name: "whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: ["cappuccino", "late", "Fliter Coffee", "tea", "Hot Chocolate"],
  breakfastOffer: "free croisant with coffee",
  lunchOffer: "free drink with sandwich",
  noOffer: "sorry no offer",
};

if (time < 1100) {
  offer = cafeA.breakfastOffer;
  console.log(cafeA.breakfastOffer);
} else if (time < 1500) {
  offer = cafeA.lunchOffer;
  console.log(cafeA.lunchOffer);
}

const alarms = {
  weekDayAlarm: "get up at 7am",
  WeekEndAlarm: "No alarm needed",
};

let day = "tuesday";
if (
  day === "monday" ||
  day === "tuesday" ||
  day === "wednesday" ||
  day === "thursday" ||
  day === "friday"
) {
  console.log(`alarm set to ${alarms.weekDayAlarm}`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`alarm set to ${alarms.WeekEndAlarm}`);
}

cafe.biscuits = ["wafle", "shortbread"];

console.log(cafe);

cafe["biscuits"] = ["wafle", "shortbread"];

console.log(cafe);

const personB = {
  name: "dan",
  age: "46",
  favSongs: ["a", "b", "c", "d"],
};

console.log(personB.favSongs);

const cafeB = {
  name: "whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: ["cappuccino", "late", "Fliter Coffee", "tea", "Hot Chocolate"],
  breakfastOffer: "free croisant with coffee",
  lunchOffer: "free drink with sandwich",
  noOffer: "sorry no offer",

  openCafe() {
    if (this.hasSpecialOffers) {
      return "time for a special offer";
    }
  },
  closedCafe() {
    return "sorry were closed";
  },
};
console.log(cafeB.openCafe());
console.log(cafeB.closedCafe());

const personC = {
  name: "dan",
  age: "46",
  sayHi() {
    if (this.name) {
      return `hello my name is ${personC.name}`;
    }
  },
};

console.log(personC.sayHi());

let pet = {
  name: "Mr Pet",
  typeOfPet: "animal",
  age: 65,
  colour: "blue",
  eat() {
    return `${this.name} is eating`;
  },
  drink() {
    return `${this.name} is drinking`;
  },
};
console.log(pet);

console.log(pet.eat());
console.log(pet.drink());

let order = [];
const coffeeShop = {
  branch: "manchester",
  drinksWithPrices: {
    tea: 1.0,
    americano: 2.0,
    mocha: 3.0,
    latte: 3.0,
    water: 0,
  },
  foodWithPrices: { salad: 2.0, sandwich: 3.0, tunaJacket: 4.5, grape: 15.0 },
  drinksOrdered(drink1, drink2) {
    let drinks = Object.keys(this.drinksWithPrices);
    let drinkValues = Object.values(this.drinksWithPrices);
    order.push(drinkValues[drinks.indexOf(drink1)]);
    order.push(drinkValues[drinks.indexOf(drink2)]);
    return `For drinks you've ordered ${drink1} and ${drink2}`;
  },
  foodOrdered(food1, food2) {
    let foods = Object.keys(this.foodWithPrices);
    let foodValues = Object.values(this.foodWithPrices);
    order.push(foodValues[foods.indexOf(food1)]);
    order.push(foodValues[foods.indexOf(food2)]);
    return `For food you've ordered ${food1} and ${food2}`;
  },
};
console.log(coffeeShop.drinksOrdered("tea", "mocha"));
console.log(coffeeShop.foodOrdered("salad", "grape"));
let total = 0;
for (i = 0; i < order.length; i++) {
  total += order[i];
}

console.log(`Your total comes to £${total}.`);
