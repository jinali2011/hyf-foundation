function getClothingTip(temprature) {
  let clothingTip;
  if (temprature >= 18) {
    clothingTip = "shorts and a t-shirt";
  } else if (temprature < 18 && temprature > 5) {
    clothingTip = "Wear Jacket";
  } else if (temprature <= 5) {
    clothingTip = "its too cold wear winter or snow related jacket";
  }
  return clothingTip;
}
let clothesToWear = getClothingTip(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

clothesToWear = getClothingTip(10);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

clothesToWear = getClothingTip(2);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
