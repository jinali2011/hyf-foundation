const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = GetMyTravelTIme(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

function GetMyTravelTIme(travelInformation) {
  const totalTime =
    travelInformation.destinationDistance / travelInformation.speed;

  // Extract the whole number for hours
  const hours = Math.floor(totalTime);

  // Multiply the remainder by 60 and round it to the nearest minute
  const minutes = Math.round((totalTime - hours) * 60);

  const output = hours + " Hours " + minutes + " Minutes";
  return output;
}
