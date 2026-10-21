const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  //SPACE " "
  // "" --> empty
  // null
  //   if (!studentName) {
  //     return "student name can not be null.";
  //   }
  //   if (studentName === "") {
  //     return "student name can not be empty.";
  //   }

  //   if (class07Students.contains(studentName)) {
  //     return `Student  ${studentName} is already in the class.`;
  //   }

  //   if (studentName === "Queen") {
  //     class07Students.push(studentName);
  //     return "Queen is added to class";
  //   }
  //   let numberOfStudent = getNumberOfStudents();

  //   if (numberOfStudent > 6) {
  //     return "Cannot add more students to class 07";
  //   }

  let numberOfStudent = getNumberOfStudents();

  if (studentName === "") {
    return "student name can not be empty.";
  } else if (class07Students.includes(studentName)) {
    return `Student  ${studentName} is already in the class.`;
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
    return "Queen is added to class";
  } else if (numberOfStudent >= 6) {
    return "Cannot add more students to class 07";
  } else {
    class07Students.push(studentName);
    return `Student  ${studentName} is added.`;
  }
}
function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}
