//What is my name - should respond with the name of the person. What if the name has not yet been mentioned?
let nameData = [];
let myToDo = [];
//https://runjs.app/play nice playgound
function getReply(command) {
  //Work 1
  // Hello my name is Benjamin - Should save the name benjamin. and respond with "nice to meet you Benjamin".
  // What if someone writes this twice?---
  let commandLowerCase = command.toLowerCase();
  if (commandLowerCase.includes(`hello my name is`, "")) {
    let myName = commandLowerCase
      .replace("  ", " ")
      .replace("hello my name is", "")
      .replace("hi my name is", "")
      .trim();

    // for (let i = 0; i < 2; i++) {
    //   sentence = sentence.replace("Hello my name is", "");
    // }

    // console.log(sentence.trim());

    if (!nameData.includes(myName)) {
      nameData.push(myName);
      return `Nice to meet you ${myName}`;
    } else {
      return `Hello Again, Nice to meet you ${myName}`;
    }
  }
  //--------------------------------------------------------------
  // work 2
  // What is my name - should respond with the name of the person. What if the name has not yet been mentioned?
  if (commandLowerCase.includes("what is my name")) {
    command = command.replace("What is my", "").trim();

    if (nameData.length > 0) {
      return `Hey ${nameData[0]}, Nice to meet you`;
    } else {
      return `Sorry, your name is not present.`;
    }
  }

  //--------------------------------------------------------------
  // work 3
  // Add fishing to my todo - Should respond with "fishing added to your todo". Should add fishing to a list of todos
  //  Add singing in the shower to my todo - Should add singing in the shower to a list of todos
  //  Remove fishing from my todo - Should respond with "Removed fishing from your todo"
  //  What is on my todo? - should respond with the todos. e.g. you have 2 todos - fishing and singing in the shower

  if (commandLowerCase.includes("remove")) {
    const todo = commandLowerCase
      .replace("remove ", "")
      .replace(" to my todo", "");
    myToDo.splice(todo, 1);
    return `Removed ${todo} from your todo`;
  } else if (command === "What is on my todo?") {
    console.log("myToDo list is =" + myToDo.join("-->"));
    const totalToDoAre = myToDo.length;
    const toDoData = myToDo.join(" and ");
    return `You have ${totalToDoAre} todos - ${toDoData}.`;
  } else {
    const todo = commandLowerCase
      .replace("add ", "")
      .replace(" to my todo", "");
    myToDo.push(todo);
  }
  //--------------------------------------------------------------
  // work 4
  // What day is it today? - Should respond with the date in a human readable format.
  if (command === "What day is it today?") {
    const today = new Date();

    const day = today.getDate();
    console.log(day);
    const month = today.toLocaleString("en-GB", { month: "long" });
    console.log(month);
    const year = today.getFullYear();
    console.log(year);

    const formattedDate = `${day}. of ${month} ${year}`;
    return formattedDate;
  }

  //--------------------------------------------------------------
  // work 5
  // Should be able to do simple math. e.g. what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48

  if (
    commandLowerCase.includes("what is") &&
    (command.includes("+") ||
      command.includes("-") ||
      command.includes("/") ||
      command.includes("*"))
  ) {
    let calculatedNumber = 0;
    if (commandLowerCase.includes("+")) {
      let numberData = commandLowerCase
        .replace("what is ", "")
        .replace("?", "")
        .split("+");
      calculatedNumber = numberData[0] + numberData[1];
    } else if (commandLowerCase.includes("-")) {
      numberData = commandLowerCase
        .replace("what is ", "")
        .replace("?", "")
        .split("-");
      calculatedNumber = numberData[0] - numberData[1];
    } else if (commandLowerCase.includes("*")) {
      numberData = commandLowerCase
        .replace("what is ", "")
        .replace("?", "")
        .split("*");
      calculatedNumber = numberData[0] * numberData[1];
    } else if (commandLowerCase.includes("/")) {
      numberData = commandLowerCase
        .replace("what is ", "")
        .replace("?", "")
        .split("/");
      calculatedNumber = numberData[0] / numberData[1];
    }

    return calculatedNumber;
  }
  //--------------------------------------------------------------
  // work 6
  // Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here

  if (commandLowerCase.includes("set a timer for")) {
    let time = commandLowerCase.replace("set a timer", "Timer set");
    console.log(time);
    time = command
      .toLowerCase()
      .replace("set a timer for", "")
      .replace("minutes", "")
      .trim();
    time = time * 60 * 1000;
    // Triggered after 4 minutes (240,000 milliseconds)
    setTimeout(() => {
      console.log("Timer done");
    }, time);
    return time;
  } else if (name.includes(command)) {
    return `${name} is already exist`;
  }
}
//--------------------------------------------------------------

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Jinali"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my Name?"));

// //--------------------------------------------------------------
console.log(getReply("Add Cooking in the garden to my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
// //--------------------------------------------------------------
console.log(getReply("What day is it today?"));
// //--------------------------------------------------------------

console.log(getReply("What is 9-6?"));
console.log(getReply("What is 4 * 12?"));
console.log(getReply("What is 9 / 3?"));
console.log(getReply("What is 3 + 6?"));
// //--------------------------------------------------------------
console.log(getReply("Set a timer for 1 minutes"));
// //--------------------------------------------------------------
