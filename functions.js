const pressGrindBeans = () => {
  console.log("Grind beans for 20 seconds");
};

pressGrindBeans();

let coffeeIsGrindng = false;

const presGrindBeans = () => {
  if (coffeeIsGrindng) {
    console.log("Stopping the grinding");
    coffeeIsGrindng = false;
  } else {
    console.log("Grinding is about to begin");
    coffeeIsGrindng = true;
  }
};

presGrindBeans();

const addUp = (num1, num2) => {
  return num1 + num2;
};

addUp(7, 3);
console.log(addUp(2, 5));

const multiplyByNineFifths = (celcius) => {
  return celcius * (9 / 5);
};
const getFarenheit = (celcius) => {
  return multiplyByNineFifths(celcius) + 32;
};

console.log("The tempurature is " + getFarenheit(15) + "F");

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(33));

let orderCount = 0;

const takeOrder = (topping, size) => {
  console.log(
    `You have ordered a ${size} pizza with ${topping}, ${orderCount} times`
  );
  orderCount++;
};
takeOrder("Peperoni", "12 inch");
takeOrder("Peperoni", "12 inch");
takeOrder("Peperoni", "12 inch");

let pin = 1234;
let balence = 1000;
const cashMachiene = (pin, withdrawAmount) => {
  if (pin === 1234 && withdrawAmount <= balence) {
    console.log(`Withdrawn ${withdrawAmount}`);
  } else if (pin !== 1234 && withdrawAmount <= balence) {
    console.log("Your Pin is wrong");
  } else if (pin === 1234 && withdrawAmount >= balence) {
    console.log("you cant withdraw that amount");
  } else {
    console.log("ERROR");
  }
};

cashMachiene(1234, 200);
cashMachiene(1244, 200);
cashMachiene(1234, 1100);
cashMachiene(1244, 1200);
