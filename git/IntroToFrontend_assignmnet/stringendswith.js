// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

function solution(str, ending) {
  // TODO: complete
  let result = str.split("");
  let removeCharacter = result.splice(0, 1);

  result = result.join("");

  if (result === ending) {
    return true;
  } else {
    return false;
  }
}
console.log(solution("abc", "e"));
