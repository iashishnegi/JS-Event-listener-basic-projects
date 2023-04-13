

let display = document.getElementById("display");

document.addEventListener("keydown", function (x) {
  display.style.color = "red";
  display.innerText = x.key + " Key is UP";
});

document.addEventListener("keyup", function (x) {
  display.style.color = "green";
  display.innerText = x.key + " Key is Down";
});
