// javascript/objects/cars/cars.js

import { CarsBlueprint } from "./cars_blueprint.js";

const dieselCar = new CarsBlueprint(
  "Červená",
  "1.6 TDI",
  "Diesel",
  "Škoda Octavia",
);
dieselCar.logCarProperties();
console.log(`Barva ${dieselCar.carName} je: ${dieselCar.color}`);

const petrolCar = new CarsBlueprint(
  "Modrá",
  "2.0 TSI",
  "Benzin",
  "Volkswagen Golf",
);

const electricCar = new CarsBlueprint(
  "Bílá",
  "Elektrický motor",
  "Elektřina",
  "Tesla Model 3",
);
electricCar.logCarProperties();
console.log(`Barva ${electricCar.carName} je: ${electricCar.color}`);
petrolCar.logCarProperties();
dieselCar.logCarProperties();
electricCar.logCarProperties();
