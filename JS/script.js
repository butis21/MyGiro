const menuButton = document.querySelector(".button-1");
const callerDiv = document.querySelector(".caller");
const callButton = document.querySelector(".call");

menuButton.addEventListener("click", () => {
    callerDiv.classList.toggle("is-open");
});

callButton.addEventListener("click", () => {
    alert("Спасибо, мы вам позвоним.");
});