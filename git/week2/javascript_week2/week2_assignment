//Flight booking fullname function

function getFullName(firstName, surName) {
  return firstName + " " + surName;
}
const fullName1 = getFullName("Benjamin", "Hughes");
console.log(fullName1);

function getFullName(firstName, surName, useFormalName) {
  if (useFormalName === true) {
    return "Lord" + " " + firstName + " " + surName;
  } else {
    return firstName + " " + surName;
  }
}
const fullName2 = getFullName("Benjamin", "Hughes", true);
console.log(fullName2);

//code for firstname and surname can  be empty and if gender is female for
// Copy your getFullname function here
function getFullName(firstName, surName, useFormalName, gender) {
  if (useFormalName === false) {
    return firstName + " " + surName;
  } else if (useFormalName === true && gender === "female") {
    return "Lady" + " " + firstName + " " + surName;
  } else if (useFormalName === true && gender === "male") {
    return "Lord" + " " + firstName + " " + surName;
  } else if ((firstName = " ")) {
    return firstName + " " + surName;
  } else if ((surName = " ")) {
    return firstName + " " + surName;
  }
}
const fullName3 = getFullName(" jinali", "shah", true, "male");
console.log(fullName3);
