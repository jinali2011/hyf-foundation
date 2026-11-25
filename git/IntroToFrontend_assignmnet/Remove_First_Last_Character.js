// Remove First and Last Character
// Task
// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// Examples
// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr'
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'

function removeCharacter(string) {
  let arrayOfString = string.split("");

  arrayOfString.splice(0, 1);
  arrayOfString.splice(arrayOfString.length - 1, 1);

  let result = arrayOfString.join("");
  return result;
}

removeCharacter("eloquent");
removeCharacter("country");
removeCharacter("person");
removeCharacter("ab");
removeCharacter("xyz");
