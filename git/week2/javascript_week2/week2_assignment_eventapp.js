//Event application
function getEventWeekDay(day) {
  const d = new Date(); // got todays date
  let toDay = d.getDay(); //today is Tuesday = 2, for week number
  const weekDays = [
    "Sunday", //0
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let eventDay = ((day % 7) + toDay) % 7;

  let eventDayName = weekDays[eventDay];
  return eventDayName;
}

console.log(getEventWeekDay(6));
