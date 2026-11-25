function houseName() {
  let name = document.getElementById("name").value;
  if (name === "") {
    document.getElementById("result").innerHTML = "Kindly enter name";
    return;
  }
  let houseOfArray = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  let randomNumber = Math.floor(Math.random() * houseOfArray.length);

  let selectedHouse = houseOfArray[randomNumber];
  document.getElementById("result").innerHTML =
    `${name} belongs in ${selectedHouse}!`;
}
