function calculator() {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, subtract, multiply, divide };
}

const calc = calculator();

let soucet = calc.add(565, 584);
let rozdil = calc.subtract(474, 520);
let soucin = calc.multiply(5822, 65);
let podil = calc.divide(632, 6);

console.log("Výsledek sčítání (565 + 584):", soucet);
console.log("Výsledek odčítání (474 - 520):", rozdil);
console.log("Výsledek násobení (5822 * 65):", soucin);
console.log("Výsledek dělení (632 / 6):", podil);
