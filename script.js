"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 17;

document.querySelector(".guess").value = Math.trunc(Math.random() * 20);
console.log(document.querySelector(".guess").value);
*/

const number = Math.trunc(Math.random() * 21);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  if (guess === number) {
    document.querySelector(".message").textContent = "Correct";
  } else {
    console.log(
      (document.querySelector(".message").textContent = "Not Correct")
    );
  }
});
