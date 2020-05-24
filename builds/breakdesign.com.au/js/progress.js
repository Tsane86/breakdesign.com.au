// how to use a loop here?

var progress1 = document.querySelector(
  "#projects > div > div.card-deck > div:nth-child(1) > div.card-footer.p-0 > div"
).innerHTML;
console.log(progress1);
document.querySelector(
  "#projects > div > div.card-deck > div:nth-child(1) > div.card-footer.p-0 > div"
).style.width = progress1;

var progress2 = document.getElementById("two").innerHTML;
document.getElementById("two").style.width = progress2;

var progress3 = document.getElementById("two").innerHTML;
document.getElementById("three").style.width = progress3;
