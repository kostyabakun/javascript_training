let firstName = "Peter";
console.log(firstName);
let lastName;
console.log(lastName);
lastName = "Parker";
console.log(lastName);
console.log(firstName + lastName);
console.log(firstName + " " + lastName);
lastName = "Pan";
console.log(lastName);
firstName = "Wendy";
console.log(firstName);

// * var proměnná
// ! var bychom neměli používat z důvodu toho, že je zastaralý.
var city = "Praha";
// ! U var je možná redeklarace
var city; // * Přepsal jsem proměnnou city
console.log(city);

// * let proměnná
let country = "CZ";
// let country; // ? Není možné redeklarovat let

{
  let carBrand = "BMW";
  console.log("Znacka auta: " + carBrand);
}
//console.log("Znacka auta: " + carBrand); // ! carBrand není dostupná mimo blok
{
  const phone = "12345";
  console.log(phone);
}
