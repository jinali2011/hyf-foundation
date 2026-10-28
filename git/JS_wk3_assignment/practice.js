// const testValues = [
//   "", // Empty string				""        => FALSY
//   null, // Null                        null      => FALSY
//   undefined, // Undefined                   undefined => FALSY
//   false, // Boolean false               false     => FALSY
//   0, // Zero                        0         => FALSY
//   NaN, // Not a Number                NaN       => FALSY
//   -0, // Negative zero               -0        => FALSY
//   0n, // BigInt zero                 0n        => FALSY

//   "hello", // Non-empty string            "hello"   => TRUTHY
//   "0", // String zero                 "0"       => TRUTHY
//   true, // Boolean true                true      => TRUTHY
//   1, // Number one                  1         => TRUTHY
//   [], // Empty array                 []        => TRUTHY
//   {}, // Empty object                {}        => TRUTHY
// ];

// testValues.forEach((value) => {
//   if (!"") {
//     console.log(value, "=> FALSY");
//   } else {
//     console.log(value, "=> TRUTHY");
//   }
// });

// console.log(!"" + 1);

// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz();

// const inputNumber = [5, 1, 4, 2, 8];

// function bubbleSort(numbers) {
//   for (let j = 0; j < numbers.length - 1; j++) {
//     for (let i = 0; i < numbers.length - 1 - j; i++) {
//       const firstNumber = numbers[i];
//       const secondNumber = numbers[i + 1];
//       if (firstNumber > secondNumber) {
//         numbers[i] = firstNumber;
//         number[i + 1] = secondNumber;
//         console.log(firstNumber);
//       }
//     }
//   }
// }
// bubbleSort(inputNumber);

// function getCharacterFrequencies(str) {
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]] = obj[str[i]] + 1;
//     } else {
//       obj[str[i]] = 1;
//     }

//     console.log(typeof str[i]);
//     return obj;
//   }
// }

// console.log(getCharacterFrequencies("happy"));
// h:1,a:1,p:2,y:1;

function formatCreditCardNumber(number) {
  const object = {};
  const string = numbers + "";
  for (let i = 0; i < string.length; i++) {
    if (i % 4 === 0 && i > 0) {
      object.formatted = object.formatted + "";
    }
    object.formatted = object.formatted + string[i];

    console.log(object);
    return object;
  }
}

formatCreditCardNumber(123456789);
