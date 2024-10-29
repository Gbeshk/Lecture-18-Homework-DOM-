let age = prompt("Enter your age");
let type = prompt("Enter movie type (regular or 3D)");
let time = prompt("Enter time of day (matinee or evening)");
let price = 0;

if (age < 10) {
  price = 5;
} else if (age > 65) {
  price = 10;
} else {
  price = 15;
}

if (type === "3D") {
  price += 5;
}
if (time === "evening") {
  price += 5;
}

let discount = false;
switch (true) {
  case discount:
    price -= 5;
    break;
  default:
    break;
}

console.log(`ბილეთის ფასი თქვენთვის არის ${price} ლარი`);
