const seriesDurations = [
  {
    title: "Scam 1992: The Harshad Mehta Story",
    days: 0,
    hours: 9,
    minutes: 10,
  },
  {
    title: "Asur Dark Side",
    days: 0,
    hours: 11,
    minutes: 12,
  },
  {
    title: "Special Ops",
    days: 0,
    hours: 12,
    minutes: 15,
  },
  {
    title: "Farzi",
    days: 0,
    hours: 7,
    minutes: 36,
  },
];

function GetMahEntertainmentInvestment(seriesDurations) {
  let output = "";
  const myTotalAge = 80; //sorry... strange but true is that indian's avg. life is 60 :D, hahahhaa...
  let totalSeriesTime = 0;

  for (let i = 0; i < seriesDurations.length; index++) {
    //'Game of thrones took 0.01% of my life'
    //      Years     Life
    //     80 years = 100 % life
    //then 1 years/time = x %

    //(1 * 100%/80)

    // 1. Convert everything into total hours
    const totalHours =
      seriesDurations[i].days * 24 +
      seriesDurations[i].hours +
      seriesDurations[i].minutes / 60;

    // 2. Divide by total hours in a standard year (365 days * 24 hours)
    const yearValue = totalHours / (365 * 24);
    const timeInvested = (yearValue * 100) / myTotalAge;

    totalSeriesTime = totalSeriesTime + timeInvested;
    const element =
      seriesDurations[i].title +
      " took " +
      timeInvested.toFixed(3) +
      "% of my life.";
    output = element + "\n" + output;
  }
  output =
    output + `\nIn total that is ${totalSeriesTime.toFixed(3)}% of my life`;
  console.log(output);
}

GetMahEntertainmentInvestment(seriesDurations);

// Farzi took 0.000867579908675799 of my life.
// Special Ops took 0.0013984018264840182 of my life.
// Asur Dark Side took 0.0012785388127853881 of my life.
// Scam 1992: The Harshad Mehta Story took 0.0010464231354642313 of my life.

// In total that is 0.2% of my life
// In total that is 0.2% of my life
// In total that is 0.2% of my life
// In total that is 0.2% of my life
