/*const age = yearOfBirth-yearFuture;
const yearFuture = 2027;
const yearOfBirth = 1993;
console.log(`The actual age is  ${age}.`);*/

//Ag-ify (A future age calculator)//
const age = 40;
const yearFuture = 2027;
const yearOfBirth = yearFuture - age;
console.log(yearOfBirth);

console.log("The Actual age is " + age + ".");

console.log(`You will be ${age} years old in ${yearFuture}.`);

//goodboy/oldboy(age calculator)//

const dogYearOfBirth = 1987;
const dogYearFuture = 2027;
const humanYear = 10;

const dogYear = humanYear * 7;

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) //if (shouldShowResultInDogYears===true)
{
  console.log(
    `Your dog will be ${humanYear} human years old in ${dogYearFuture}.`,
  );
} else {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}.`);
}

//House price calculator//

const houseWide = 8;
const houseDeep = 10;
const houseHigh = 10;
const gardenSizeInM2 = 100;
const houseCost = 2500000;
const julieHouseWide = 5;
const julieHouseDeep = 11;
const julieHouseHigh = 8;
const julieGardenSizeInM2 = 70;
const julieHouseCost = 1000000;
let volumeInMeters = houseWide * houseDeep * houseHigh;
console.log("volume in meters for peter is ", volumeInMeters);
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(
  "Ideal house price for peter is ",
  housePrice,
  " and peter is paying for house is ",
  houseCost,
  "that\'s more that ideal price.",
);
volumeInMeters = julieHouseDeep * julieHouseWide * julieHouseHigh;
console.log("volume in meter for julie is", volumeInMeters);
housePrice = volumeInMeters * 2.5 * 1000 + julieGardenSizeInM2 * 300;
console.log(
  "Ideal house price for julie is ",
  housePrice,
  " and julie is paying for house is ",
  julieHouseCost,
  "that\'s less than ideal price.",
);
console.log(
  "peter is paying for house is ",
  houseCost,
  " and julie is paying for house is ",
  julieHouseCost,
  ".",
);

//Ez Namey (Startup name generator) //
const firstWords = ["shah", "patel", "awesome", "abc", "xyz", "job", "it"];
const secondWords = [
  "enterprise",
  "& com",
  "company",
  "venture",
  "comp",
  "ngo",
  "llp",
];

//const startupName = [firstWords[0] + secondWords[0]],[firstWords[1]+secondWords[1]],[firstWords[2]+secondWords[2]],;
//console.log(startupName);
const startUp = Math.floor(Math.random() * 7);
const startupName = [firstWords[0] + secondWords[0]] * 7;
console.log(startupName);
