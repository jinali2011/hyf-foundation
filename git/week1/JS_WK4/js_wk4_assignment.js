const nameData = [];
const myToDo = [];

function getReply(command) {
  let commandLowerCase = command.toLowerCase();

  // WORK 1: Hello, my name is Benjamin
  if (commandLowerCase.includes("hello my name is")) {
    let myName = commandLowerCase.replace("hello my name is", "").trim();

    if (!nameData.includes(myName)) {
      nameData.push(myName);
      return `Nice to meet you ${myName}`;
    } else {
      return `Hello Again, Nice to meet you ${myName}`;
    }
  }

  // WORK 2: What is my name?
  if (commandLowerCase.includes("what is my name")) {
    if (nameData.length > 0) {
      return `Your name is ${nameData[0]}`;
    } else {
      return `Sorry, your name is not present.`;
    }
  }

  // WORK 3: Add, remove and display todos

  if (commandLowerCase.includes("remove ")) {
    const todo = commandLowerCase
      .replace("remove ", "")
      .replace(" from my todo", "")
      .trim();

    const todoIndex = myToDo.indexOf(todo);

    if (todoIndex !== -1) {
      myToDo.splice(todoIndex, 1);
      return `Removed ${todo} from your todo`;
    } else {
      return `${todo} was not found in your todo`;
    }
  } else if (commandLowerCase.includes("what is on my todo")) {
    const totalToDoAre = myToDo.length;
    const toDoData = myToDo.join(" and ");

    return `You have ${totalToDoAre} todos - ${toDoData}.`;
  } else if (
    commandLowerCase.includes("add ") &&
    commandLowerCase.includes(" to my todo")
  ) {
    const todo = commandLowerCase
      .replace("add ", "")
      .replace(" to my todo", "")
      .trim();

    myToDo.push(todo);

    return `${todo} added to your todo`;
  }

  // WORK 4: What day is it today?
  if (commandLowerCase.includes("what day is it today")) {
    const today = new Date();

    const day = today.getDate();
    const month = today.toLocaleString("en-GB", {
      month: "long",
    });
    const year = today.getFullYear();

    const formattedDate = `${day}. of ${month} ${year}`;

    return formattedDate;
  }

  // WORK 5: Simple math calculations
  if (
    commandLowerCase.includes("what is") &&
    (command.includes("+") ||
      command.includes("-") ||
      command.includes("/") ||
      command.includes("*"))
  ) {
    let numberData = [];
    let calculatedNumber = 0;

    if (commandLowerCase.includes("+")) {
      numberData = commandLowerCase
        .replace("what is ", "")
        .replace("?", "")
        .split("+");

      calculatedNumber = Number(numberData[0]) + Number(numberData[1]);
    } else if (commandLowerCase.includes("-")) {
      numberData = commandLowerCase
        .replace("what is ", "")
        .replace("?", "")
        .split("-");

      calculatedNumber = Number(numberData[0]) - Number(numberData[1]);
    } else if (commandLowerCase.includes("*")) {
      numberData = commandLowerCase
        .replace("what is ", "")
        .replace("?", "")
        .split("*");

      calculatedNumber = Number(numberData[0]) * Number(numberData[1]);
    } else if (commandLowerCase.includes("/")) {
      numberData = commandLowerCase
        .replace("what is ", "")
        .replace("?", "")
        .split("/");

      calculatedNumber = Number(numberData[0]) / Number(numberData[1]);
    }

    return calculatedNumber;
  }

  // WORK 6: Set a timer
  if (commandLowerCase.includes("set a timer for")) {
    let time = commandLowerCase
      .replace("set a timer for", "")
      .replace("minutes", "")
      .trim();

    const timeInMilliseconds = Number(time) * 60 * 1000;

    setTimeout(() => {
      console.log("Timer done");
    }, timeInMilliseconds);

    return `Timer set for ${time} minutes`;
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Jinali"));
console.log(getReply("Hello my name is Benjamin"));

console.log(getReply("What is my name?"));

console.log(getReply("Add Cooking in the garden to my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));

console.log(getReply("What is on my todo?"));

console.log(getReply("Remove fishing from my todo"));

console.log(getReply("What is on my todo?"));

console.log(getReply("What day is it today?"));

console.log(getReply("What is 9-6?"));
console.log(getReply("What is 4 * 12?"));
console.log(getReply("What is 9 / 3?"));
console.log(getReply("What is 3 + 6?"));

console.log(getReply("Set a timer for 1 minutes"));
