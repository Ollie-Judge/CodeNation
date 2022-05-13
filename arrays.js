let coffeeOrder = [
  "Alex - Cortado",
  "Ben - Cortado",
  "Charlie - Whatever's new",
];

console.log(coffeeOrder);
console.log(coffeeOrder[2]);

coffeeOrder[1] = "Ann - Vanilla Late";
console.log(coffeeOrder);
console.log(coffeeOrder.length);

coffeeOrder.push("Donna - espresso");
console.log(coffeeOrder);

coffeeOrder.pop();
console.log(coffeeOrder);

let favSongs = ["The Distant Blue", "Momento Mori", "All Love Is Lost"];
console.log(favSongs);

favSongs.push("Libertine");
console.log(favSongs);

favSongs.pop();
console.log(favSongs);

let people = ["James", "Leah", "Aaron", "Harold"];

console.log(people);

people.splice(2, 0, "Luke", "Keith");
console.log(people);
