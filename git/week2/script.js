const colorButton = document.querySelector("#color-button");
const workButton = document.querySelector("#show-work");
const workPreview = document.querySelector("#work-preview");

const backgroundColors = [
  "#18342e",
  "#443126",
  "#1f3447",
  "#3b2c40",
  "#414018",
];
let previousColorIndex = -1;

colorButton.addEventListener("click", () => {
  let colorIndex = Math.floor(Math.random() * backgroundColors.length);

  while (colorIndex === previousColorIndex) {
    colorIndex = Math.floor(Math.random() * backgroundColors.length);
  }

  previousColorIndex = colorIndex;
  document.body.style.backgroundColor = backgroundColors[colorIndex];
});

workButton.addEventListener("click", () => {
  const isExpanded = workButton.getAttribute("aria-expanded") === "true";
  workButton.setAttribute("aria-expanded", String(!isExpanded));
  workPreview.hidden = isExpanded;
});
