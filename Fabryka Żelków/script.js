ksztalt = document.querySelector("#ksztalt");
R = document.querySelector("#R");
G = document.querySelector("#G");
B = document.querySelector("#B");
button = document.querySelector("#btn1");
btn2 = document.querySelector("#btn2");
display = document.querySelector("#display");

button.addEventListener("click", function (evt) {
  evt.preventDefault();

  console.log("a1");
  display.innerHTML = "Zamówiłeś żelka:";
  if (ksztalt.value == 1) {
    display.innerHTML += " miś";
  } else if (ksztalt.value == 2) {
    display.innerHTML += " żabka";
  } else if (ksztalt.value == 3) {
    display.innerHTML += " serce";
  } else {
    display.innerHTML += " inny kształt";
  }

  btn2.style.backgroundColor = `rgb(${R.value},${G.value},${B.value})`;
});
