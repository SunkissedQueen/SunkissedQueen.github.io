alert("Ready for a treasure hunt?")
var treasureLocation = Math.floor(Math.random()*9);
var bombLocation = Math.floor(Math.random()*9);
if (treasureLocation == bombLocation) {
  bombLocation = Math.floor(Math.random() *9)};
let clickCount = 0;

const treasure = (location) => {
  if (location == treasureLocation) {
    document.getElementById(location).innerHTML = "&#x1f308";
    alert("You win!!!")}
  else if (clickCount>5){
    document.getElementById(location).innerHTML =
    alert("Game over!!!");
    }
  else if (location == bombLocation) {
    document.getElementById(location).innerHTML = "&#x2620";
  alert("You lose!!!")}
  else {
    document.getElementById(location).innerHTML = "&#x1f332"}
    clickCount++;
    console.log(clickCount);
}
