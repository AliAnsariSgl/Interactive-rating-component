const ratings = document.querySelectorAll(".circle");
const btn = document.getElementById("submit-btn");
let rating = document.getElementById("rating");
let thankyou = document.getElementById("thankYou");
let badge = document.getElementById("badge");
let val;

for (let index = 0; index < ratings.length; index++) {
  const element = ratings[index];
  element.addEventListener("click", () => {
    ratings.forEach((el) => {
      el.classList.remove("selected");
    });
    element.classList.add("selected");

    val = element.innerHTML;
  });
}

for (let index = 0; index < btn.length; index++) {
  const element = ratings[index];
  element.addEventListener("click", () => {
    ratings.forEach((el) => {
      el.classList.remove("selected");
    });
    element.classList.add("selected");
  });
}

btn.addEventListener("click", () => {
  rating.style.display = "none";
  thankyou.style.display = "flex";
  badge.innerHTML = val;
});
